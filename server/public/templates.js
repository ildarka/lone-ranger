(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('index.html',
    '<html ng-app="app">\n' +
    '<head>\n' +
    '  <meta charset="utf-8" />\n' +
    '  <base href="/" />  \n' +
    '  <link rel="stylesheet" href="lib/sega2/sega2.css" />\n' +
    '  <link rel="stylesheet" href="all.css" />\n' +
    '</head>\n' +
    '  \n' +
    '<body ng-controller="appCtrl">\n' +
    '  <header>\n' +
    '    \n' +
    '\n' +
    '    <ul class="menu">\n' +
    '      <li ng-repeat="(url, r) in config.routes" ng-class="{active: r == route}" ng-hide="r.hidden || !ACL(r.access)"><a href="{{url}}">{{r.title}}</a></li>\n' +
    '      <li>&nbsp;</li>\n' +
    '    </ul>\n' +
    '    \n' +
    '  </header>\n' +
    '\n' +
    '  <div ng-include="\'components/messageBox/messageBox.html\'"></div>\n' +
    '  \n' +
    '  <main class="paper {{route.class}}">\n' +
    '    \n' +
    '    <article ng-view="" class="view"></article>\n' +
    '    \n' +
    '  </main>\n' +
    '</body>\n' +
    '  \n' +
    '<script src="lib/angularjs/angular.js"></script>\n' +
    '<script src="lib/ngstorage/ngStorage.min.js"></script>\n' +
    '<script src="lib/angular-route/angular-route.min.js"></script>\n' +
    '<script src="lib/angular-animate/angular-animate.min.js"></script>\n' +
    '<script src="lib/ng-file-upload/ng-file-upload.min.js"></script>\n' +
    '<script src="lib/ngDraggable/ngDraggable.js"></script>\n' +
    '  \n' +
    '<script src="config.js">;</script>\n' +
    '<script src="templates.js">;</script>\n' +
    '<script src="all.js">;</script>\n' +
    '\n' +
    '</html>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/messageBox/messageBox.html',
    '<div class="messageBox" ng-class="{error: messageBoxError}" ng-show="messageBox">\n' +
    '  <!--i class="close mdi mdi-close"></i-->\n' +
    '  {{messageBox}}\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/dev/dev.html',
    '  <div class="dev">\n' +
    '\n' +
    '    <div style="margin-left:-10px">\n' +
    '      <span class="tap" ng-class="{\'-active\': expand}"><a ng-click="expand=!expand">Expand all</a></span> \n' +
    '      <span class="tap" ng-class="{\'-active\': forms}"><a ng-click="forms=!forms">Show forms</a></span> \n' +
    '      <span style="margin-right:20px" class="tap" ng-class="{\'-active\': params}"><a ng-click="params=!params">Show params</a></span>\n' +
    '      <button style="margin-right:20px" class="-rounded" ng-click="testAll()">Test all API</button>\n' +
    '      <span class="allErrors" ng-show="_allErrors">Errors: {{_allErrors}}</span>\n' +
    '      <span ng-show="_testAll && !_allErrors">All OK!</span>\n' +
    '    </div>\n' +
    '    \n' +
    '    <article class="clearfix" ng-repeat="(model, vmodel) in config.api">\n' +
    '      <h1>{{model | uppercase}}</h1>\n' +
    '        \n' +
    '      \n' +
    '      \n' +
    '      \n' +
    '          <div class="method clearfix" ng-init="initMethod(model,method,vmethod)">\n' +
    '            <div>\n' +
    '              Custom method\n' +
    '            </div>\n' +
    '            \n' +
    '            <div class="form" ng-show="forms">\n' +
    '              <input type="text" ng-model="method" style="margin-bottom:5px; width:200px" placeholder="Custom method" />\n' +
    '              <textarea style="height:6em" ng-model="formatedParams" auto-grow ng-class="{jsonerror: vmethod._jsonerror, shake: vmethod._shake}"></textarea>\n' +
    '              <div>\n' +
    '                <input type="submit" class="-small -blue" value="Отправить" ng-click="apicall(method,formatedParams,vmethod)" /> \n' +
    '\n' +
    '                <span class="elapsed">\n' +
    '                  <span ng-if="!vmethod._inprogress && vmethod._elapsed"><span ng-bind="vmethod._elapsed"></span> ms</span>\n' +
    '                  <span ng-if="vmethod._inprogress"><i class="fa fa-spin fa-circle-o-notch"></i></span>\n' +
    '                </span>\n' +
    '              </div>\n' +
    '              \n' +
    '              <div ng-if="vmethod._result && !vmethod._error" class="result">\n' +
    '                <pre class="json">{{vmethod._result}}</pre>\n' +
    '              </div>\n' +
    '              \n' +
    '              <div ng-if="vmethod._error" class="error">\n' +
    '                <pre class="json">Error: {{vmethod._error}}</pre>\n' +
    '              </div>\n' +
    '              \n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <!-- /custom -->\n' +
    '      \n' +
    '      \n' +
    '      \n' +
    '          <div class="method clearfix" ng-repeat="(method, vmethod) in vmodel.methods" ng-init="initMethod(model,method,vmethod)">\n' +
    '            <div>\n' +
    '              <a class="pseudo-link" ng-click="vmethod.expand = !vmethod.expand">{{vmethod.methodname}}</a>\n' +
    '            </div>\n' +
    '            \n' +
    '            <div class="more" ng-show="expand || vmethod.expand">\n' +
    '            <div class="form" ng-show="forms">\n' +
    '              <textarea ng-if="vmethod.params" style="height:6em" ng-model="vmethod.formatedParams" auto-grow ng-class="{jsonerror: vmethod._jsonerror, shake: vmethod._shake}"></textarea>\n' +
    '              <div>\n' +
    '                <input type="submit" class="-small -blue" value="Отправить" ng-click="apicall(vmethod.methodname,vmethod.formatedParams,vmethod)" /> \n' +
    '\n' +
    '                <span class="elapsed">\n' +
    '                  <span ng-if="!vmethod._inprogress && vmethod._elapsed"><span ng-bind="vmethod._elapsed"></span> ms</span>\n' +
    '                  <span ng-if="vmethod._inprogress"><i class="fa fa-spin fa-circle-o-notch"></i></span>\n' +
    '                </span>\n' +
    '              </div>\n' +
    '              <div ng-if="vmethod._result && !vmethod._error" class="result">\n' +
    '                <pre class="json">{{vmethod._result}}</pre>\n' +
    '              </div>  \n' +
    '              <div ng-if="vmethod._error" class="error">\n' +
    '                <pre class="json">Error: {{vmethod._error}}</pre>\n' +
    '              </div>  \n' +
    '            </div>\n' +
    '              \n' +
    '\n' +
    '            <div class="params" ng-show="params">\n' +
    '              <pre class="request json" ng-if="vmethod.params">Request prototype:\n' +
    '{{vmethod.params | JSON}}\n' +
    '              </pre>\n' +
    '              <pre class="request json" ng-if="vmethod.response" ng-class="{\'no-top-padding\': vmethod.params}">Response prototype:\n' +
    '{{vmethod.response | JSON}}\n' +
    '              </pre>\n' +
    '\n' +
    '            </div>\n' +
    '                        \n' +
    '          </div>  \n' +
    '    </article>  \n' +
    '\n' +
    '    \n' +
    '  </div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/login/login.html',
    '<div class="login" ng-controller="loginCtrl">\n' +
    '\n' +
    '  <div class="unautorized" ng-show="!me()">\n' +
    '  <a class="pseudo-link" ng-click="model.show=!model.show">Login</a>\n' +
    '  <form name="userform" ng-show="model.show" class="panel -panel-white form" ng-submit="login()" ng-class="{shake: model.error}">\n' +
    '    <i class="mdi mdi-window-close -pull-right" ng-click="model.show = false"></i>\n' +
    '    <div class="field">\n' +
    '      <label>Пользователь</label>\n' +
    '      <input ng-model="model.name" required type="text" />\n' +
    '    </div>  \n' +
    '    <div class="field">\n' +
    '      <label>Пароль</label>\n' +
    '      <input ng-model="model.password" required type="password" />\n' +
    '    </div>\n' +
    '    <input type="submit" value="Войти" class="-m-right" ng-class="{\'-disabled\':!userform.$valid}" /> \n' +
    '    <a class="pseudo-link" ng-click="register()">Регистрация</a>\n' +
    '    \n' +
    '    <p class="error" ng-show="model.errorregister">Это имя пользователя уже занято!</p>\n' +
    '    <p ng-show="model.message">{{model.message}}</p>\n' +
    '    \n' +
    '  </form>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="autorized" ng-show="me()">\n' +
    '    <a class="pseudo-link" ng-click="model.show=!model.show"><i class="mdi mdi-account"></i> {{me().name}}</a>\n' +
    '    <div class="panel -panel-white form"  ng-show="model.show">\n' +
    '      <i class="mdi mdi-window-close -pull-right" ng-click="model.show = false"></i>\n' +
    '      <a class="pseudo-link" ng-click="logout()">Выход</a>\n' +
    '    </div>\n' +
    '  </div>  \n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/users/users.html',
    '<h1>\n' +
    '  {{route.title}}\n' +
    '</h1>\n' +
    '\n' +
    '<div class="users clearfix columns2">\n' +
    '\n' +
    '<div class="column">\n' +
    '    <ul>\n' +
    '      <li ng-repeat="u in users | orderBy : \'id\' track by $index">\n' +
    '        <div class="-pull-right" ng-if="u.id != me().id">\n' +
    '          <select ng-model="u.role" ng-change="update(u)" ng-options="key as value for (key, value) in config.api.users.roles" class="role -m-right" >\n' +
    '          </select>  \n' +
    '          <a ng-click="ban(u.id)" class="pseudo-link -muted"><i class="mdi mdi-window-close"></i> Бан</a>\n' +
    '        </div>\n' +
    '        <i class="mdi mdi-account"></i>\n' +
    '        <b>{{u.name}}</b>\n' +
    '\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '</div>\n' +
    '\n' +
    '<div class="column panel" ng-show="usersNEW.length || usersBAN.length">\n' +
    '    <div ng-show="usersNEW.length">\n' +
    '      <i>Ждут подтверждения</i>\n' +
    '      <ul>\n' +
    '        <li ng-repeat="u in usersNEW">\n' +
    '          <div class="-pull-right">\n' +
    '            <a ng-click="aprove(u)" class="pseudo-link -m-right"><i class="mdi mdi-check"></i> OK</a>\n' +
    '            <a ng-click="remove(u.id)" class="pseudo-link -muted"><i class="mdi mdi-window-close"></i> Удалить</a>\n' +
    '          </div>\n' +
    '\n' +
    '          <span class="date">{{u.date | date : "dd.MM.yyyy"}}</span> \n' +
    '          <i class="mdi mdi-account"></i>\n' +
    '          <b>{{u.name}}</b>\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '    \n' +
    '    <div ng-class="{\'-m2-top\': usersNEW.length}" ng-show="usersBAN.length">\n' +
    '      <i>Забаненные</i>\n' +
    '      <ul>\n' +
    '        <li ng-repeat="u in usersBAN">\n' +
    '          <div class="-pull-right">\n' +
    '            <a ng-click="aprove(u)" class="pseudo-link -m-right"><i class="mdi mdi-check"></i> OK</a>\n' +
    '            <a ng-click="remove(u.id)" class="pseudo-link -muted"><i class="mdi mdi-window-close"></i> Удалить</a>\n' +
    '          </div>\n' +
    '\n' +
    '          <span class="date">{{u.date | date : "dd.MM.yyyy"}}</span> \n' +
    '          <i class="mdi mdi-account"></i>\n' +
    '          <b>{{u.name}}</b>\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '  \n' +
    '  \n' +
    '</div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();
