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
  && rm /etc/apache2/conf.d/userdir.conf 
# RUN   yum -y update \
#       && yum -y install \
#         httpd \
#         mod_ssl \
#         dos2unix \
#       && yum clean all \
#       && rm /etc/httpd/conf.d/autoindex.conf \
#       && rm /etc/httpd/conf.d/ssl.conf \
#       && rm /etc/httpd/conf.d/userdir.conf \
#       && rm /etc/httpd/conf.d/welcome.conf \
#       && yum install -y nano \
#       && rm -fr /var/lib/apt/lists/* \
#       && yum -y install sudo \
#       && yum install -y nodejs \
#       && yum install -y python27 \
#       && yum install -y python39 \
#       && yum install -y gcc*


#Script to start service, Added ssl default conf, Added shib module apache
# RUN ln -s /opt/etc/httpd/conf.d/ssl.conf \
#   && opt/etc/httpd/conf.d/ssl.conf \
#   && ln -s /opt/etc/httpd/conf.d/virt.conf \
#   && opt/etc/httpd/conf.d/virt.conf

# RUN opt/etc/httpd/conf.d/ssl.conf \
#   && opt/etc/httpd/conf.d/virt.conf

RUN echo "************** Built Apache WITHOUT Shibboleth **************"



COPY package.json package-lock.json ./
COPY . ./
RUN npm install
RUN npm rebuild node-sass
RUN npm run build
RUN mv ./build/* /var/www/localhost/htdocs
RUN cd /
RUN touch /usr/libexec/.htpasswd/httpd-ssl-pass-dialog.txt \
  && 


EXPOSE 80 443

ENTRYPOINT ["/usr/sbin/httpd", "-D", "FOREGROUND"]