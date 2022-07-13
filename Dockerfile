FROM alpine:3.14
#RUN cd /etc/yum.repos.d/

# Add starters and installers
COPY ./container_files /opt
COPY . /tmp

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
  && apk add apache2-ssl \
  && rm /etc/apache2/conf.d/default.conf \
  && rm /etc/apache2/conf.d/info.conf \
  && rm /etc/apache2/conf.d/mpm.conf \ 
  && rm /etc/apache2/conf.d/userdir.conf 

RUN echo "************** Built Apache WITHOUT Shibboleth **************"


RUN mkdir -p /var/www/localhost/htdocs
RUN cd tmp/ && npm i && \
    npm run build && mv build/* /var/www/localhost/htdocs/
RUN cp /tmp/container_files/etc/httpd/conf.d/virt.conf /etc/apache2/conf.d/
RUN mv -f /tmp/container_files/etc/httpd/conf.d/httpd.conf /etc/apache2/
RUN mv -f /tmp/container_files/etc/httpd/conf.d/ssl.conf /etc/apache2/conf.d/ssl.conf
RUN mkdir /certs
RUN mv /tmp/.htaccess /var/www/localhost/htdocs/


EXPOSE 80 443
ENTRYPOINT ["/usr/sbin/httpd", "-D", "FOREGROUND"]