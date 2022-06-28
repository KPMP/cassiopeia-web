FROM centos:centos8.4.2105
RUN cd /etc/yum.repos.d/
RUN sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
RUN sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
# Add starters and installers
ADD ./container_files /opt

RUN   yum -y update \
      && yum -y install \
        httpd \
        mod_ssl \
        dos2unix \
      && yum clean all \
      && rm /etc/httpd/conf.d/autoindex.conf \
      && rm /etc/httpd/conf.d/ssl.conf \
      && rm /etc/httpd/conf.d/userdir.conf \
      && rm /etc/httpd/conf.d/welcome.conf \
      && yum install -y nano \
      && rm -fr /var/lib/apt/lists/* \
      && yum -y install sudo \
      && yum install -y nodejs \
      && yum install -y python27 \
      && yum install -y python39 \
      && yum install -y gcc*


#Script to start service, Added ssl default conf, Added shib module apache
RUN ln -s /opt/etc/httpd/conf.d/ssl.conf /etc/httpd/conf.d/ssl.conf && ln -s /opt/etc/httpd/conf.d/virt.conf /etc/httpd/conf.d/virt.conf

RUN echo "************** Built Apache WITHOUT Shibboleth **************"



COPY package.json package-lock.json ./
COPY . ./
RUN npm install
RUN npm rebuild node-sass
RUN npm run build
RUN mv ./build/* /var/www/html
RUN cd /

EXPOSE 80 443

ENTRYPOINT ["/usr/sbin/httpd", "-D", "FOREGROUND"]
