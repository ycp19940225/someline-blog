# Someline blog
_V 1.0_



It is built on someline-starter:https://github.com/ycp19940225/someline-blog.


It is built with top of popular `Laravel 5.3 framework`, `Vue.js 2.0`, `Restful API`, `Repository Design`, `OAuth2`, `JWT`, `Unit Tests`.


Email: 820363773@qq.com 


## Out-of-box Components

*Framework*
- Laravel 5.3 [laravel/framework](https://github.com/laravel/framework)
- Laravel IDE Helper [barryvdh/laravel-ide-helper](https://github.com/barryvdh/laravel-ide-helper)
- Clockwork [itsgoingd/clockwork](https://github.com/itsgoingd/clockwork)
- Laravel 5 log viewer [rap2hpoutre/laravel-log-viewer](https://github.com/rap2hpoutre/laravel-log-viewer)

*Foundation*
- Redis [predis/predis](https://github.com/nrk/predis)
- GuzzleHTTP [guzzlehttp/guzzle](https://github.com/guzzle/guzzle)
- HTTP Status [lukasoppermann/http-status](https://github.com/lukasoppermann/http-status)

*Core*
- Restful API [dingo/api](https://github.com/dingo/api)
- L5 Repository [prettus/l5-repository](https://github.com/andersao/l5-repository)
- Fractal [thephpleague/fractal](https://github.com/thephpleague/fractal)
- Laravel Validation [prettus/laravel-validation](https://github.com/andersao/laravel-validator)
- Intervention Image [intervention/image](http://image.intervention.io/)
- Intervention Image Cache [intervention/imagecache](https://github.com/Intervention/imagecache)
- Image Validator [cviebrock/image-validator](https://github.com/cviebrock/image-validator)
- Rest API Client [someline/rest-api-client](https://github.com/someline/rest-api-client)
- Someline Image Service [someline/someline-image](https://github.com/someline/someline-image)

*Authentication*
- Laravel Passport [laravel/passport](https://laravel.com/docs/5.3/passport)

*Theme*
- Angulr theme with Bootstrap and jQuery support. For Demo: [Angular version](http://flatfull.com/themes/angulr/angular/#/app/dashboard-v1) and [HTML version](http://flatfull.com/themes/angulr/html/).
  
  *Please [buy a license](http://themeforest.net/item/angulr-bootstrap-admin-web-app-with-angularjs/8437259?ref=Flatfull) if you use this in your project.*

*Frontend*
- [Vue.js](https://vuejs.org/) Reactive Components for Modern Web Interfaces

## Get Started

*Make sure you have already installed PHP 7.0 and [composer](https://getcomposer.org/doc/00-intro.md).*

You can get started either option A or B:

### A. Get started via composer

Under working folder, run the command:

```
composer create-project --prefer-dist someline/someline-starter someline-starter
```


### Development Requirements

- PHP: >=7.0
- MySQL: >=5.7
- SQLite extension
- Laravel 5: https://laravel.com/docs/5.3/installation
- NodeJS: https://nodejs.org/
- Bower: https://bower.io/


##Installation
首先进入项目根目录：

安装项目依赖（通过 git clone 方式安装项目的话）：
````
composer install
````
安装npm依赖：
````
npm install
````
安装bower依赖：
````
bower install
````
安装完成后，设置 Laravel：
````
sudo cp .env.example .env
sudo chmod -R 777 storage
sudo chmod -R 777 bootstrap/cache
php artisan key:generate
````

然后安装 Laravel Passport 来生成安全访问令牌：
````
php artisan passport:install
````
准备启程
  
