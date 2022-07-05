FROM alpine:3.14
#RUN cd /etc/yum.repos.d/

# Add starters and installers
COPY ./container_files /opt

RUN apk add apache2 \
  && apk add --update --no-cache python2 \
  && ln -sf python2 /usr/bin/python \
  && apk add python3 --update --no-cache python3 \
  &&  ln -sf python3 /usr/bin/python \
  && python3 -m ensurepip \
  && pip3 install --no-cache --upgrade pip setuptools \
  && apk add sudo \
  && apk add nodejs \
  && apk add build-base \
  && apk add nano \
  && apk add nodejs \
  && apk add --update npm \
  && apk add openrc --no-cache \
  && rm /etc/apache2/conf.d/default.conf \
  && rm /etc/apache2/conf.d/info.conf \
  && rm /etc/apache2/conf.d/mpm.conf \ 
  && rm /etc/apache2/conf.d/userdir.conf \
  && apk add apache2-ssl

RUN echo "************** Built Apache WITHOUT Shibboleth **************"


COPY package.json package-lock.json /tmp/
RUN cd /tmp && ls
RUN cd /tmp && npm install
RUN npm rebuild node-sass
RUN mkdir -p /var/www/localhost/htdocs && cp -a /tmp/* /var/www/localhost/htdocs
COPY . /var/www/localhost/htdocs
RUN cd /var/www/localhost/htdocs && npm run build
RUN mv var/www/localhost/htdocs/build/* /var/www/localhost/htdocs/
RUN cd /var/www/localhost/htdocs/ && mkdir /var/www/localhost/htdocs/KPMP
RUN cd /var/www/localhost/htdocs/KPMP && mkdir /var/www/localhost/htdocs/KPMP/cassiopeia-web/
RUN cp -R /var/www/localhost/htdocs/static /var/www/localhost/htdocs/KPMP/cassiopeia-web/
RUN cp /var/www/localhost/htdocs/container_files/etc/httpd/conf.d/* /etc/apache2/conf.d/
RUN cp /var/www/localhost/htdocs/httpd.conf /etc/apache2/


EXPOSE 80 443
ENTRYPOINT ["/usr/sbin/httpd", "-D", "FOREGROUND"]