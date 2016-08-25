/**
         * 使用示例
         * <input def-laydate type="text" id="id1" ng-model="startTime"/>
         */
        app
        .directive('defLaydate', function() {
            return {
                require: '?ngModel',
                restrict: 'A',
                scope: {
                    ngModel: '='
                },
                link: function(scope, element, attr, ngModel) {
                    var _date = null,_config={};
                    
                        // 初始化参数 
                    _config = {
                        elem: '#' + attr.id,
                        format: attr.format != undefined && attr.format != '' ? attr.format : 'YYYY-MM-DD hh:mm:ss',
                        istime: true,
                        istoday:true,
                        isclear:false,
                        max:attr.hasOwnProperty('maxDate')?attr.maxDate:'',
                        min:attr.hasOwnProperty('minDate')?attr.minDate:'',
                        choose: function(data) {
                            scope.$apply(setVeiwValue);
                            
                        },
                        clear:function(){
                           ngModel.$setViewValue(null);
                        }
                    };
                    // 初始化
                    _date= laydate(_config);

                    _date=laydate.skin('danlan');
                   
                    // 模型值同步到视图上
                    ngModel.$render = function() {
                        element.val(ngModel.$viewValue || '');
                    };

                    // 监听元素上的事件
                    element.on('blur keyup change focus', function() {
                        scope.$apply(setVeiwValue);
                    });

                    setVeiwValue();

                    // 更新模型上的视图值
                    function setVeiwValue() {
                        var val = element.val();
                        ngModel.$setViewValue(val);
                    }
                }  
            }
        })