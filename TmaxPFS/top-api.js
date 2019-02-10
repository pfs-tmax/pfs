/**
		 * @namespace top
		 * @description
		 */
		Top = (function() {
		    function Top() {}
		    Top.version = "";
		    /**
		     * @method getVersion
		     * @return string
		     * @description ���� top.js�� ������ ��ȯ�Ѵ�.
		     */
		    Top.getVersion = function() {
		        return this.version;
		    };
		    Top.setVersion = function(version) {
		        this.version = version;
		    };
		    Top.doNotUseThisFuncEver = function(b) {
		    };
		    
		    Top.libsPath = "";
		    Top.configs = {};
		    Top.events = {
		        onCreate: [],
		        onBeforeLoad: [],
		        onLoad: [],
		        onRouteActivate: function() {
		            return true;
		        },
		        onRouteDeactivate: function() {
		            return true;
		        },
		        onWidgetAttach: {},
		        onWidgetDetach: {},
		        onLibsLoad: {}
		    };
		    Top.routes = {};
		    Top.modules = {};
		    Top.pages = {};
		    Top.pageSrcMap = {};
		    Top.curPage = null;
		    Top.curRoute = {};
		    Top.dialogList = {};
		    Top.autoComleteContainers = [];
		    return Top;
		})();
		
		/**
		 * @namespace app
		 * @description
		 */
		Top.App = (function() {
		    App.prototype = Object.create(Top.prototype);
		    App.prototype.constructor = App;
		    App.checkLocationHash = false; // browser�� url �Է��� ��, location.hash�� url�� ����Ǵ� ��� check.
		
		    function App() {}
		    /**
		     * @method create
		     * @parameter options - �ɼ�
		     * @description top.js ���� �����Ѵ�.
		     */
		    App.create = function(options) {};
		
		    App.onLoadUserLogic = function(callback) {};
		
		    /**
		     * @method getConfig
		     * @parameter key
		     * @return string or object
		     * @description key�� �ش��ϴ� config ���� ��ȯ�Ѵ�.
		     */
		    App.getConfig = function(key) {};
		
		    /**
		     * @method getConfigs
		     * @return object
		     * @description ��ü config ���� ��ȯ�Ѵ�.
		     */
		    App.getConfigs = function() {};
		
		    /**
		     * @method setTitle
		     * @parameter title
		     * @description ������ Ÿ��Ʋ�� �����Ѵ�.
		     */
		    App.setTitle = function(title) {};
		
		    /**
		     * @method onBeforeLoad
		     * @parameter function
		     * @description beforeLoad ������ ȣ��� �ݹ� �Լ��� ����Ѵ�.
		     */
		    App.onBeforeLoad = function(func) {};
		
		    /**
		     * @method onLoad
		     * @parameter function
		     * @description load ������ ȣ��� �ݹ� �Լ��� ����Ѵ�.
		     */
		    App.onLoad = function(func) {};
		
		    /**
		     * @method isLoaded
		     * @return boolean
		     * @description ���� load �Ǿ����� ���θ� ��ȯ�Ѵ�.
		     */
		    App.isLoaded = function() {};
		
		    App.addEvent = function(event) {};
		
		    /**
		     * @method addRoute
		     * @parameter routings
		     * @description ����� ������ �߰��Ѵ�.
		     */
		    App.addRoute = function(routings) {};
		
		    /**
		     * @method removeRoute
		     * @parameter path
		     * @description �ش� ������� �����Ѵ�.
		     */
		    App.removeRoute = function(path) {
		        delete Top.routes[path];
		    };
		
		    /**
		     * @method routeTo
		     * @parameter path - �̵��� path
		     * @parameter data - ����� �� ������ ������
		     * @description path�� ������� �Ѵ�.
		     */
		    App.routeTo = function(path, data, __popstate) {};
		
		    /**
		     * @method onLoad404
		     * @parameter function
		     * @description 404page�� ����� ��, 404page�� home��ư�� ����� ��θ� function���� ����.
		     */
		    App.onLoad404 = function(fn) {};
		
		    /**
		     * @method reset404
		     * @parameter pageSrc - Ŀ���͸���¡�Ͽ� ���� ������ 404page�� ���
		     * @parameter imageSrc - ���� ������ 404page���ο� �� image�� ���
		     * @description Top���� �⺻���� �����ϴ� 404page�� �ƴ�, ����ڰ� Ŀ���͸���¡�Ͽ� ���� 404page�� ����� �� �ֵ��� ����.
		     */
		    App.reset404 = function(pageSrc, imageSrc) {};
		
		    /**
		     * @method load404Page 
		     * @parameter function
		     * @description 404page�� ������Ѵ�.
		     */
		    App.load404Page = function() {}
		
		    /**
		     * @method reset403
		     * @parameter pageSrc - Ŀ���͸���¡�Ͽ� ���� ������ 403page�� ���
		     * @parameter imageSrc - ���� ������ 403page���ο� �� image�� ���
		     * @description Top���� �⺻���� �����ϴ� 403page�� �ƴ�, ����ڰ� Ŀ���͸���¡�Ͽ� ���� 403page�� ����� �� �ֵ��� ����.
		     */
		    App.reset403 = function(pageSrc, imageSrc) {};
		
		    /**
		     * @method load403Page
		     * @parameter function
		     * @description 403page�� ������ϸ�, function�� ���� 403page�� home��ư�� ����� ���ϴ� ��� ���� ����.
		     */
		    App.load403Page = function(fn) {};
		
		    /**
		     * @method back
		     * @description (������ ��ɰ� �����ϰ�) �ڷ� �̵��Ѵ�.
		     */
		    App.back = function() {};
		
		    /**
		     * @method forward
		     * @description (������ ��ɰ� �����ϰ�) ������ �̵��Ѵ�.
		     */
		    App.forward = function() {};
		
		    /**
		     * @method openWindow
		     * @parameter path - �̵��� routing path
		     * @parameter name - �� â �̸� (Javascript Window.open() ����)
		     * @parameter features - �� â ���� (Javascript Window.open() ����)
		     * @description path�� �� â���� ����.
		     */
		    App.openWindow = function(path, name, features) {};
		
		    /**
		     * @method goToPage
		     * @parameter pageId - �̵��� page�� id
		     * @description pageId�� ���� page�� �̵��Ѵ�.
		     */
		    App.goToPage = function(pageId) {};
		
		    /**
		     * @method getPages
		     * @return object
		     * @description ��ü page ����Ʈ�� ��ȯ�Ѵ�.
		     */
		    App.getPages = function() {};
		
		    /**
		     * @method getCurrentPage
		     * @return Top.Widget.Page
		     * @description ���� page�� ��ȯ�Ѵ�.
		     */
		    App.getCurrentPage = function() {};
		
		    /**
		     * @method getPage
		     * @parameter pageId
		     * @return Top.Widget.Page
		     * @description pageId�� �ش��ϴ� page�� ��ȯ�Ѵ�.
		     */
		    App.getPage = function(pageId) {};
		
		    App.getPageIdBySrc = function(src) {};
		
		    /**
		     * @method onWidgetAttach
		     * @parameter widgetId
		     * @parameter function - ����� �ݹ� ������
		     * @description widgetId�� �ش��ϴ� widget�� attach ���� �� ������ �ݹ� �Լ��� ����Ѵ�.
		     */
		    App.onWidgetAttach = function(widgetId, func) {};
		
		    /**
		     * @method onWidgetDetach
		     * @parameter widgetId
		     * @parameter function - ����� �ݹ� ������
		     * @description widgetId�� �ش��ϴ� widget�� detach ���� �� ������ �ݹ� �Լ��� ����Ѵ�.
		     */
		    App.onWidgetDetach = function(widgetId, func) {};
		
		    /**
		     * @method isWidgetAttached
		     * @parameter widgetId
		     * @return boolean
		     * @description widgetId�� �ش��ϴ� widget�� attach ���θ� ��ȯ�Ѵ�.
		     */
		    App.isWidgetAttached = function(widgetId) {};
		
		    /**
		     * @method onRouteActivate
		     * @parameter function
		     * @description ����� activate �� ������ �ݹ� �Լ��� ����Ѵ�.
		     */
		    App.onRouteActivate = function(func) {};
		
		    /**
		     * @method onRouteDeactivate
		     * @parameter function
		     * @description ����� deactivate �� ������ �ݹ� �Լ��� ����Ѵ�.
		     */
		    App.onRouteDeactivate = function(func) {};
		
		    /**
		     * @method current
		     * @return object
		     * @description ���� ����� ������ ��ȯ�Ѵ�.
		     */
		    App.current = function() {};
		
		    App.addDialog = function(id, dialog) {};
		
		    App.removeDialog = function(id) {};
		
		    App.getDialogs = function() {};
		
		    /**
		     * @method closeDialogs
		     * @description ���� �����ִ� ��ü ���̾�α׸� �ݴ´�.
		     */
		    App.closeDialogs = function() {};
		
		    /**
		     * @method openDialog
		     * @description ���ο� ���̾�α׸� �����Ͽ� ����.
		     */
		    App.openDialog = function(params) {};
		
		    App.addAutoCompleteContainer = function(autoCompleteContainer) {
		        Top.autoComleteContainers.push(autoCompleteContainer);
		    }
		
		    /**
		     * @method closeAutoCompleteContainers
		     * @description ���� �����ִ� �ڵ� �ϼ� â(textfield �� textarea)�� �ݴ´�.
		     */
		    App.closeAutoCompleteContainers = function() {};
		
		    /**
		     * @method closeOpenedSelectBox
		     * @description ���� �����ִ� ����Ʈ�ڽ��� �ݴ´�.
		     */
		    App.closeOpenedSelectBox = function() {}
		
		    /**
		     * @method createBlur
		     * @parameter focusedWidgets (string or object)
		     * @return Top.Widget.Layout
		     * @description focusedWidgets�� �����ϰ� ȭ���� blur ó���ϸ� blur ���̾��� layout�� ��ȯ�Ѵ�.
		     */
		    App.createBlur = function(focusedWidgets) {
		        return App;
		    };
		
		    /**
		     * @method removeBlur
		     * @description blur ó���� �����Ѵ�.
		     */
		    App.removeBlur = function() {
		        return App;
		    }
		})();
		
		
		/**
		 * @namespace action
		 * @description
		 */
		Top.Action = (function() {
		    Action.prototype = Object.create(Top.prototype);
		    Action.prototype.constructor = Action;
		
		    function Action() {}
		
		    Action.windowCreate = function(params) {
		
		    };
		
		    Action.windowDestroy = function(params) {
		
		    };
		
		    Action.pageNavigate = function(params) {};
		
		    Action.widgetCreate = function(params) {};
		
		    Action.widgetDestroy = function(params) {};
		
		    Action.widgetChange = function(params) {};
		
		    Action.widgetMove = function(params) {};
		
		    Action.FragmentShow = function(params) {};
		
		    Action.FragmentRemove = function(params) {};
		
		    Action.dialogCreate = function(params) {
		        return Action;
		    }
		})();
		
		/**
		 * @namespace data
		 * @description Top.Data�� ���� data�� �����ϰ� ���� �Ӽ����� ���ε��� �� �� �ִ�.
		 */
		Top.Data = (function() {
		    Data.prototype = Object.create(Top.prototype);
		    Data.prototype.constructor = Data;
		
		    Data.map = {};
		    Data.prototype.__allValues = {};
		    Data.prototype.__boundWidgets = {};
		    Data.prototype.__boundDevices = {};
		    Data.prototype.__initialValues = {};
		    Data.prototype.__isBackward = false; // backward compatibility
		    Data.prototype.__modelInfo = {};
		
		    function Data(obj, name) {}
		
		    /**
		     * @method create
		     * @parameter name (string)
		     * @parameter data (object)
		     * @return Top.Data
		     * @description name�� �̸����� �ϰ� data�� ���� Top.Data ��ü�� �����Ѵ�.
		     */
		    Data.create = function(name, data) {
		      
		    };
		
		    /**
		     * @method .getValues
		     * @return object
		     * @description ��ü value�� ��ȯ�Ѵ�.
		     */
		    Data.prototype.getValues = function() {
		        var values = {};
		        return values;
		    };
		
		    /**
		     * @method .getValues
		     * @parameter path (string)
		     * @return object
		     * @description path�� �ش��ϴ� value�� ��ȯ�Ѵ�.
		     */
		    Data.prototype.getValue = function(path) {};
		
		    Data.prototype.getData = function(keys) {};
		
		    Data.prototype.setData = function(values) {
		    };
		
		    /**
		     * @method .setValues
		     * @parameter values (object)
		     * @description ��ü value�� �Է��Ѵ�.
		     */
		    Data.prototype.setValues = function(values) {
		    };
		
		    /**
		     * @method .setValue
		     * @parameter path (string)
		     * @parameter value (object)
		     * @description path�� �ش��ϴ� value�� �Է��Ѵ�.
		     */
		    Data.prototype.setValue = function(path, value, __fromWidgetId, __isFromDevice) {
		    };
		
		    /**
		     * @method .addValue
		     * @parameter path (string)
		     * @parameter value (object)
		     * @description path�� �ش��ϴ� array�� value�� �߰��Ѵ�.
		     */
		    Data.prototype.addValue = function(path, value) {
		    };
		
		    /**
		     * @method .removeValue
		     * @parameter path (string)
		     * @parameter index (object)
		     * @description path�� �ش��ϴ� array�� index�� �����Ѵ�.
		     */
		    Data.prototype.removeValue = function(path, index) {
		    };
		
		    /**
		     * @method .reset
		     * @parameter path (string)
		     * @description ���� ������ ������ �ʱ�ȭ�Ѵ�.
		     */
		    Data.prototype.reset = function(path) {
		    };
		
		    /**
		     * @method .update
		     * @parameter path (string)
		     * @description �ش� path�� ���ε��� ������ ������Ʈ�Ѵ�.
		     */
		    Data.prototype.update = function(path) {
		    };
		
		    Data.prototype.setModel = function(field, modelId) {
		    };
		
		    Data.prototype.getModel = function() {
		    };
		
		    Data.prototype.setRelations = function(relations) {
		    };
		
		    Data.prototype.getRelations = function() {
		    };
		
		    Data.prototype.getDataByRelations = function(relationsId) {
		      
		    };
		
		    Data.prototype.getRelationsById = function(relationsId) {
		       
		    };
		
		    Data.prototype.getRootId = function(relationsId) {
		       
		    };
		
		    Data.createModel = function(packageName, id, dataFields) {
		       
		    };
		
		    Data.getDataModel = function(id) {
		    };
		
		    Data.createClass = function(packageName, id, fieldNames) {
		      
		    };
		
		    Data.getClass = function(className) {
		    };
		
		    /**
		     * @method .toTreeNodes
		     * @parameter origin (object)
		     * @parameter keyMap (object)
		     * @return object
		     * @description Top.Widget.Treeview�� ���ε��ϱ� ���� 1���� �����͸� tree ���� �����ͷ� ��ȯ�Ѵ�.
		     */
		    Data.toTreeNodes = function(origin, keyMap) {
		    };
		
		    Data.syncTreeNodes = function(nodes) {};
		})();
		
		/**
		 * @namespace model
		 * @description
		 */
		Top.Model = (function() {
		    Model.prototype = Object.create(Top.prototype);
		    Model.prototype.constructor = Model;
		
		    function Model() {}
		
		    return Model;
		})();
		
		/**
		 * @namespace modelcontroller
		 * @description
		 */
		Top.Model.Controller = (function() {
		    Controller.prototype = Object.create(Top.Model.prototype);
		    Controller.prototype.constructor = Controller;
		
		    function Controller(obj) {
		        Object.assign(this, obj);
		    }
		
		    Controller.create = function(obj) {
		        return new Controller(obj);
		    }
		
		    return Controller;
		})();
		
		/**
		 * @namespace datacontroller
		 * @description
		 */
		Top.DataController = (function() {
		    DataController.prototype = Object.create(Top.prototype);
		    DataController.prototype.constructor = DataController;
		
		    function DataController(obj) {
		    }
		
		    DataController.create = function(obj) {
		        return new DataController(obj);
		    };
		
		    return DataController;
		})();
		
		/**
		 * @namespace dom
		 * @description
		 */
		Top.Dom = (function() {
		    Dom.prototype = Object.create(Top.prototype);
		    Dom.prototype.constructor = Dom;
		
		    function Dom() {}
		
		    /**
		     * @method selectById
		     * @parameter id (string)
		     * @return Top.Widget
		     * @description id�� �ش��ϴ� Top.Widget ��ü�� DOM���� ã�� ��ȯ�Ѵ�.
		     */
		    Dom.selectById = function(id) {
		    };
		
		    /**
		     * @method selectByTagName
		     * @parameter tagName (string)
		     * @return Array[Top.Widget]
		     * @description tagName�� �ش��ϴ� Top.Widget ��ü�� DOM���� ã�� ��ȯ�Ѵ�.
		     */
		    Dom.selectByTagName = function(tagName) {
		    };
		
		    /**
		     * @method select
		     * @parameter selector (string)
		     * @return Array[Top.Widget]
		     * @description selector�� �ش��ϴ� Top.Widget ��ü�� DOM���� ã�� ��ȯ�Ѵ�.
		     */
		    Dom.select = function(selector) {
		    };
		
		    /**
		     * @method appendToBody
		     * @parameter widget (Top.Widget)
		     * @description widget�� body�� append�Ѵ�.
		     */
		    Dom.appendToBody = function(widget) {
		    };
		
		    /**
		     * @method appendChild
		     * @parameter parentId (string)
		     * @parameter widget (Top.Widget) or widgetId (string)
		     * @description widget�� parentId�� ���� parent�� append �Ѵ�.
		     */
		    Dom.appendChild = function(parentId, widget) {
		    };
		
		    /**
		     * @method insertBefore
		     * @parameter referId (string)
		     * @parameter widget (Top.Widget) or widgetId (string)
		     * @description widget�� referId�� ���� refer �տ� insert �Ѵ�.
		     */
		    Dom.insertBefore = function(referId, widget) {
		    };
		
		    /**
		     * @method remove
		     * @parameter widgetId (string)
		     * @description widgetId�� ���� widget�� DOM���� �����Ѵ�.
		     */
		    Dom.remove = function(widgetId) {
		    };
		
		    return Dom;
		})();
		
		/**
		 * @namespace ajax
		 * @description Top.Ajax�� ���� ajax�� ������ �� �ִ�.
		 */
		Top.Ajax = (function() {
		    Ajax.prototype = Object.create(Top.prototype);
		    Ajax.prototype.constructor = Ajax;
		
		    function Ajax() {}
		
		    /**
		     * @method execute
		     * @parameter url (string)
		     * @parameter settings (object)
		     * @description ajax�� �����Ѵ�.
		     */
		    Ajax.execute = function(url, settings) {
		       
		    };
		
		    Ajax.executeById = function(id) {
		    };
		
		    Ajax.get = function(url, request, response, onSuccess, onFail) {
		      
		    };
		
		    Ajax.post = function(url, request, response, onSuccess, onFail) {
		        
		    };
		
		    Ajax.toQueryString = function(data) {
		    };
		
		    return Ajax;
		})();
		
		/**
		 * @namespace device
		 * @description
		 */
		Top.Device = (function() {
		    Device.prototype = Object.create(Top.prototype);
		    Device.prototype.constructor = Device;
		
		    Device.prototype.id = "";
		    Device.prototype.__boundWidgets = {};
		    Device.prototype.__boundData = {};
		
		    function Device(obj) {
		      
		    }
		
		    Device.create = function(obj) {
		    };
		
		    Device.prototype.getValue = function(path) {
		       
		    };
		
		    Device.prototype.setValue = function(path, value) {
		      
		    };
		
		    return Device;
		})();
		
		/**
		 * @namespace restapi
		 * @description
		 */
		Top.Device.RestAPI = (function() {
		    RestAPI.prototype = Object.create(Top.Device.prototype);
		    RestAPI.prototype.constructor = RestAPI;
		
		    RestAPI.prototype.host = "";
		    RestAPI.prototype.url = "";
		    RestAPI.prototype.dataType = "JSON";
		    RestAPI.prototype.sync = true;
		    RestAPI.prototype.requestHeaderData = "";
		    RestAPI.prototype.requestBodyData = "";
		    RestAPI.prototype.status = "";
		    RestAPI.prototype.statusCode = "";
		    RestAPI.prototype.headerData = "";
		    RestAPI.prototype.responseBodyData = "";
		    RestAPI.prototype.onComplete = function() {};
		    RestAPI.prototype.onSuccess = function() {};
		    RestAPI.prototype.onFailure = function() {};
		
		    function RestAPI(obj) {
		        Object.assign(this, obj);
		    }
		
		    RestAPI.create = function(obj) {
		        return new RestAPI(obj);
		    };
		
		    RestAPI.prototype.__init = function() {
		        if (!this.host) this.host = "";
		        if (!this.url) this.url = "";
		        if (!this.dataType) this.dataType = "JSON";
		        if (!this.sync) this.sync = true;
		        if (!this.requestHeaderData) this.requestHeaderData = "";
		        if (!this.requestBodyData) this.requestBodyData = "";
		    };
		
		    RestAPI.prototype.get = function() {
		        this.__ajax("GET");
		    };
		
		    RestAPI.prototype.post = function() {
		        this.__ajax("POST");
		    };
		
		    RestAPI.prototype.put = function() {
		        this.__ajax("PUT");
		    };
		
		    RestAPI.prototype.delete = function() {
		        this.__ajax("DELETE");
		    };
		
		    RestAPI.prototype.getDataType = function() {
		        return this.dataType;
		    }
		
		    RestAPI.prototype.getDeviceType = function() {
		        return "RestAPI";
		    }
		
		    RestAPI.prototype.getHeaderData = function() {
		        return this.headerData;
		    }
		
		    RestAPI.prototype.getHost = function() {
		        return this.host;
		    }
		
		    RestAPI.prototype.getRequestBodyData = function() {
		        return this.requestBodyData;
		    }
		
		    RestAPI.prototype.getResponse = function() {
		        return this.responseBodyData;
		    }
		
		    RestAPI.prototype.getResponseBodyData = function() {
		        return this.responseBodyData;
		    }
		
		    RestAPI.prototype.getStatus = function() {
		        return this.status;
		    }
		
		    RestAPI.prototype.getStatusCode = function() {
		        return this.statusCode;
		    }
		
		    RestAPI.prototype.getUrl = function() {
		        return this.url;
		    }
		
		    RestAPI.prototype.isSync = function() {
		        return this.sync;
		    }
		
		    RestAPI.prototype.setDataType = function(dataType) {
		        this.dataType = dataType;
		    }
		
		    RestAPI.prototype.setHeaderData = function(headerData) {
		        this.headerData = headerData;
		    }
		
		    RestAPI.prototype.setHost = function(host) {
		        this.host = host;
		    }
		
		    RestAPI.prototype.setRequestBodyData = function(requestBodyData) {
		        this.requestBodyData = requestBodyData;
		    }
		
		    RestAPI.prototype.setStatus = function(status) {
		        this.status = status;
		    }
		
		    RestAPI.prototype.setSync = function(sync) {
		        this.sync = sync;
		    }
		
		    RestAPI.prototype.setUrl = function(url) {
		        this.url = url;
		    }
		
		    return RestAPI;
		})();
		
		/**
		 * @namespace filechooser
		 * @description
		 */
		Top.Device.FileChooser = (function() {
		    FileChooser.prototype = Object.create(Top.Device.prototype);
		    FileChooser.prototype.constructor = FileChooser;
		
		    FileChooser.prototype.id = "";
		    FileChooser.prototype.title = "";
		    FileChooser.prototype.windowId = "";
		    FileChooser.prototype.saveAs = "";
		    FileChooser.prototype.extFilter = "";
		    FileChooser.prototype.defaultExt = "";
		    FileChooser.prototype.defaultPath = "";
		    FileChooser.prototype.path = "";
		    FileChooser.prototype.responseString = "";
		    FileChooser.prototype.File = null;
		    FileChooser.prototype.onFileChoose = function() {};
		
		    function FileChooser(obj) {
		        Object.assign(this, obj);
		    }
		
		    /**
		     * @method create
		     * @parameter settings (object)
		     * @description Filechooser�� �����Ѵ�.
		     */
		    FileChooser.create = function(obj) {
		        return new FileChooser(obj);
		    };
		
		    FileChooser.prototype.getDeviceType = function() {
		        return "FileChooser";
		    };
		
		    FileChooser.prototype.getTitle = function() {
		        return this.title;
		    };
		
		    FileChooser.prototype.setTitle = function(title) {
		        this.title = title;
		    };
		
		    FileChooser.prototype.getWindowId = function() {
		        return this.windowId;
		    };
		
		    FileChooser.prototype.setWindowId = function(windowId) {
		        this.windowId = windowId;
		    };
		
		    FileChooser.prototype.getSaveAs = function() {
		        return this.saveAs;
		    };
		
		    FileChooser.prototype.setSaveAs = function(saveAs) {
		        this.saveAs = saveAs;
		    };
		
		    FileChooser.prototype.getDefaultExt = function() {
		        return this.defaultExt;
		    };
		
		    FileChooser.prototype.setDefaultExt = function(defaultExt) {
		        this.defaultExt = defaultExt;
		    };
		
		    FileChooser.prototype.getExtFilter = function() {
		        return this.extFilter;
		    };
		
		    FileChooser.prototype.setExtFilter = function(extFilter) {
		        this.extFilter = extFilter;
		    };
		
		    FileChooser.prototype.getDefaultPath = function() {
		        return this.defaultPath;
		    };
		
		    FileChooser.prototype.setDefaultPath = function(defaultPath) {
		        this.defaultPath = defaultPath;
		    };
		    FileChooser.prototype.getMultiple = function() {
		        return this.multiple;
		    };
		
		    FileChooser.prototype.setMultiple = function(multiple) {
		        this.multiple = multiple;
		    };
		    FileChooser.prototype.getFolder = function() {
		        return this.webkitdirectory;
		    };
		
		    FileChooser.prototype.setFolder = function(folder) {
		        this.webkitdirectory = folder;
		    };
		
		    FileChooser.prototype.getPath = function() {
		        return this.path;
		    };
		
		    FileChooser.prototype.setPath = function(path) {
		        this.path = path;
		    };
		
		    FileChooser.prototype.getFile = function() {
		        return this.file;
		    };
		
		    FileChooser.prototype.setFile = function(file) {
		        this.file = file;
		
		    }
		    FileChooser.prototype.getSrc = function() {
		        return this.src;
		    }
		    FileChooser.prototype.read = function() {
		    }
		
		    /**
		     * @method .show
		     * @description Filechooser�� �����Ѵ�.
		     */
		    FileChooser.prototype.show = function() {};
		
		    return FileChooser;
		})();
		
		/**
		 * @namespace controller
		 * @description Controller�� �����ϰ� view���� ���ε��� ���� scope�� ������ �� �ִ�.
		 */
		Top.Controller = (function() {
		    Controller.prototype = Object.create(Top.prototype);
		    Controller.prototype.constructor = Controller;
		
		    function Controller(obj) {
		        Object.assign(this, obj);
		    }
		
		    Controller.map = {};
		
		    /**
		     * @method create
		     * @parameter name (string)
		     * @parameter controller (object)
		     * @description Controller�� �����Ѵ�.
		     */
		    Controller.create = function(name, controller) {
		    };
		
		    Controller.onLoad = function(controller, callback) {
		        if (!controller.hasOwnProperty("__loadEvents")) {
		            controller.__loadEvents = [];
		        }
		
		        controller.__loadEvents.push(callback);
		    };
		
		    /**
		     * @method set
		     * @parameter name (string)
		     * @parameter controller (object)
		     * @description name�� ���� controller�� �����Ѵ�.
		     */
		    Controller.set = function(name, controller) {
		        this.map[name] = controller;
		    };
		
		    /**
		     * @method get
		     * @parameter name (string)
		     * @description name�� �ش��ϴ� controller�� ��ȯ�Ѵ�.
		     */
		    Controller.get = function(name) {
		        return this.map[name];
		    };
		
		    /**
		     * @method setAppController
		     * @parameter controller (object)
		     * @description appController�� �����Ѵ�.
		     */
		    Controller.setAppController = function(controller) {
		        Controller.appController = controller;
		    };
		
		    /**
		     * @method getAppController
		     * @return Top.Controller
		     * @description appController ��ü�� ��ȯ�Ͽ� �������� ���� ��� window ��ü�� ��ȯ�Ѵ�.
		     */
		    Controller.getAppController = function() {
		        return Controller.appController || window;
		    };
		    Controller.prototype.onInit = function(callback) {
		        if (typeof callback === 'function') {
		            this.__initEvents.push(callback);
		        }
		    };
		
		    Controller.prototype.isLoaded = function() {
		        return this.__loaded;
		    };
		
		    Controller.prototype.getName = function() {
		        return this.__name;
		    };
		
		    return Controller;
		})();
		
		/**
		 * @namespace module
		 * @description
		 */
		Top.Module = (function() {
		    Module.prototype = Object.create(Top.prototype);
		    Module.prototype.constructor = Module;
		
		    function Module() {}
		
		    Module.create = function(module) {
		        this.__moduleList[this.__curName] = module;
		    };
		
		    Module.load = function(name, callback) {
		    };
		
		    return Module;
		})();
		
		/**
		 * @namespace util
		 * @description
		 */
		Top.Util = (function() {
		    Util.prototype = Object.create(Top.prototype);
		    Util.prototype.constructor = Util;
		
		    function Util() {}
		
		    /**
		     * @method guid
		     * @return string
		     * @description 16�ڸ��� guid�� �����Ͽ� ��ȯ�Ѵ�.
		     */
		    Util.guid = function() {
		    };
		
		    Util.isTopData = function(strValue) {
		    };
		
		    Util.getFileExtension = function(fileName) {
		    };
		
		    Util.getFileName = function(path) {
		    };
		
		    Util.namespace = function(string, widget) {
		    };
		
		    Util.getDataName = function(path, widget) {
		    };
		
		    Util.createGetterSetter = function(object) {
		    };
		
		    Util.capitalizeFirstLetter = function(string) {
		    };
		
		    Util.toCamelCase = function(string) {
		    };
		    Util.toUnderscore = function(string) {
		    };
		
		    Util.toDash = function(string) {
		    };
		    return Util;
		})();
		
		/**
		 * @namespace browser
		 * @description
		 */
		Top.Util.Browser = (function() {
		    Browser.prototype = Object.create(Top.Util.prototype);
		    Browser.prototype.constructor = Browser;
		
		    function Browser() {}
		
		    Browser.isOpera = function() {
		    };
		
		    Browser.isFirefox = function() {
		    };
		
		    Browser.isSafari = function() {
		    };
		
		    Browser.isIE = function() {
		    };
		
		    Browser.isEdge = function() {
		    };
		
		    Browser.isChrome = function() {
		    };
		
		    Browser.isBlink = function() {
		    };
		
		    Browser.getIEVersion = function() {
		    }
		
		    return Browser;
		})();
		
		/**
		 * @namespace i18n
		 * @description Top.i18n�� ���� ����ȭ ������ �����ϴ�.
		 */
		Top.i18n = (function() {
		    i18n.prototype = Object.create(Top.prototype);
		    i18n.prototype.constructor = i18n;
		
		    function i18n() {}
		
		    i18n.map = {};
		
		    /**
		     * @method load
		     * @parameter settings (object)
		     * @description i18n ������ �ҷ��´�.
		     */
		    i18n.load = function(settings) {
		    };
		    /**
		     * @method t
		     * @parameter key (string)
		     * @parameter default value (string)
		     * @return string
		     * @description key�� �ش��ϴ� i18n value�� ��ȯ�Ѵ�. �ش� key�� ���� ��� default value�� �Է��Ͽ��� �� �ش� ���� ��ȯ�ȴ�.
		     */
		    i18n.t = function(key, defaultValue) {
		    };
		
		    /**
		     * @method onLoad
		     * @parameter callback (function)
		     * @description i18n load �� ȣ���� �ݹ��� ����Ѵ�.
		     */
		    i18n.onLoad = function(callback) {
		    };
		
		    /**
		     * @method isLoaded
		     * @return boolean
		     * @description i18n ������ �ε�Ǿ����� ���θ� ��ȯ�Ѵ�.
		     */
		    i18n.isLoaded = function() {
		    };
		
		    /**
		     * @method set
		     * @parameter settings (object)
		     * @description i18n�� �����Ѵ�.
		     */
		    i18n.set = function(obj) {
		    };
		
		    /**
		     * @method get
		     * @return object
		     * @description i18n ������ ��ȯ�Ѵ�.
		     */
		    i18n.get = function() {
		    };
		
		    return i18n;
		})();
		
		/**
		 * @namespace livereload
		 * @description
		 */
		Top.LiveReload = (function() {
		    LiveReload.prototype = Object.create(Top.prototype);
		    LiveReload.prototype.constructor = LiveReload;
		
		    function LiveReload(obj) {
		    }
		
		    LiveReload.create = function(obj) {
		        return new LiveReload(obj);
		    };
		
		    LiveReload.prototype.connect = function() {
		    };
		
		    LiveReload.prototype.sendCommand = function(command) {
		    };
		
		    LiveReload.prototype.parseMessage = function(data) {
		    };
		
		    LiveReload.prototype.reload = function(message) {
		    };
		
		    LiveReload.prototype.reloadPage = function() {
		        window.document.location.reload();
		    };
		
		    LiveReload.prototype.alert = function(message) {
		        alert(message.message);
		    };
		
		    return LiveReload;
		})();
		
		/**
		 * @namespace drawablemanager
		 * @description
		 */
		Top.DrawableManager = (function() {
		    DrawableManager.prototype = Object.create(Top.prototype);
		    DrawableManager.prototype.constructor = DrawableManager;
		
		    function DrawableManager() {}
		
		    DrawableManager.__map = {};
		
		    DrawableManager.create = function(obj) {
		        Object.assign(DrawableManager.__map, obj);
		    };
		
		    /**
		     * @method get
		     * @parameter id (string)
		     * @return object
		     * @description id�� �ش��ϴ� drawable�� value�� ��ȯ�Ѵ�.
		     */
		    DrawableManager.get = function(id) {
		        return DrawableManager.__map[id];
		    };
		
		    return DrawableManager;
		})();
		
		/**
		 * @namespace rawmanager
		 * @description
		 */
		Top.RawManager = (function() {
		    RawManager.prototype = Object.create(Top.prototype);
		    RawManager.prototype.constructor = RawManager;
		
		    function RawManager() {}
		    RawManager.create = function(obj) {
		        var keys = Object.keys(obj);
		        var newObj = {};
		        for (var i = 0, len = keys.length; i < len; i++) {
		            newObj[keys[i].split(".")[0]] = obj[keys[i]];
		        }
		        Object.assign(RawManager.__map, newObj);
		    };
		
		    /**
		     * @method get
		     * @parameter id (string)
		     * @return object
		     * @description id�� �ش��ϴ� raw�� value�� ��ȯ�Ѵ�.
		     */
		    RawManager.get = function(id) {
		        return RawManager.__map[id];
		    };
		
		    return RawManager;
		})();
		
		/**
		 * @namespace valuesmanager
		 * @description
		 */
		Top.ValuesManager = (function() {
		    ValuesManager.prototype = Object.create(Top.prototype);
		    ValuesManager.prototype.constructor = ValuesManager;
		
		    function ValuesManager() {}
		
		    ValuesManager.create = function(type, obj) {
		        Object.assign(ValuesManager.__map[type], obj);
		    };
		
		    /**
		     * @method get
		     * @parameter id (string)
		     * @return object
		     * @description id�� �ش��ϴ� values�� value�� ��ȯ�Ѵ�.
		     */
		    ValuesManager.get = function(type, id) {
		        return ValuesManager.__map[type][id];
		    };
		
		    return ValuesManager;
		})();
		
		/**
		 * @namespace top_contextmenu
		 * @description
		 * @dddd top-contextmnu.js�� ���ļ� �и�
		 */
		Top.ContextMenu = (function() {
		    ContextMenu.prototype = Object.create(Top.prototype);
		    ContextMenu.prototype.constructor = ContextMenu;
		
		    function ContextMenu() {}
		    ContextMenu.create = function(obj) {
		        Object.assign(ContextMenu.__map, obj);
		    };
		
		    ContextMenu.get = function(id) {
		        return ContextMenu.__map[id];
		    };
		
		    ContextMenu.setWidget = function(widget) {
		        this.__widget = widget;
		    };
		
		    ContextMenu.getDom = function() {
		        return this.__widget;
		    };
		
		    ContextMenu.getWidgetById = function(id) {
		        this.__widget.setProperties({ id: id, items: this.get(id) });
		        return this.__widget;
		    };
		
		    return ContextMenu;
		})();
		
		/**
		 * @namespace top_dialog
		 * @description
		 */
		Top.Dialog = (function() {
		    Dialog.prototype = Object.create(Top.prototype);
		    Dialog.prototype.constructor = Dialog;
		
		    function Dialog() {}
		
		
		    Dialog.create = function(id, props) {
		    };
		
		    Dialog.init = function() {
		    };
		
		    return Dialog;
		})();
		
		/**
		 * @namespace top_notification
		 * @description
		 */
		Top.Notification = (function() {
		    Notification.prototype = Object.create(Top.prototype);
		    Notification.prototype.constructor = Notification;
		
		    function Notification() {}
		
		    Notification.create = function(id, props) {
		    };
		
		    Notification.init = function() {
		    };
		
		    return Notification;
		})();
		
		window.addEventListener("popstate", function(event) {
		});
		/**
		 * @namespace loader
		 * @description
		 */
		Top.Loader = (function() {
		    Loader.prototype = Object.create(Top.prototype);
		    Loader.prototype.constructor = Loader;
		
		    function Loader() {}
		
		    /**
		     * @method start
		     * @parameter settings (object)
		     * @description loader�� �����Ѵ�.
		     */
		    Loader.start = function(settings) {};
		
		    /**
		     * @method stop
		     * @parameter force (boolean) �Ǵ� settings (object)
		     * @description loader�� �����Ѵ�. �⺻������ start ���� Ƚ����ŭ stop�� �����ؾ��ϸ� force�� true�� ��� start Ƚ���� ������� �����Ѵ�.
		     */
		    Loader.stop = function(force) {
		    };
		
		    /**
		     * @method isLoading
		     * @return boolean
		     * @description loader ���� �� ���θ� ��ȯ�Ѵ�.
		     */
		    Loader.isLoading = function() {
		        return this.__isLoading;
		    };
		
		    return Loader;
		})();
		
		Top.EventManager = (function() {
		    EventManager.prototype = Object.create(Top.prototype);
		    EventManager.prototype.constructor = EventManager;
		    EventManager.prototype.events = {};
		    EventManager.prototype.shortCut = false;
		
		    function EventManager() {}
		
		    EventManager.on = function(event, topDom, selector, callback) {
		    };
		
		
		    EventManager.off = function(event, topDom, selector) {
		    };
		
		    EventManager.addShortcut = function(key, callback) {};
		})();
		
		/**
		 * @namespace excel
		 * @description
		 */
		Top.Excel = (function() {
		    Excel.prototype = Object.create(Top.prototype);
		    Excel.prototype.constructor = Excel;
		
		    function Excel() {}
		
		    /**
		     * @method import
		     * @parameter device (object) - ���� file�� binary. filechooser�� �ݹ� �Ķ����.
		     * @parameter header (array) - excel header(ù ��° row) ��  import�� header�� array ���·� ���� ��, �ش� column�� import�Ѵ�. ���� ��, ��ü header import
		     * @parameter callback (function) - import�� ������ �θ� callback function. ù ��° �Ķ���Ͱ� import�� array�̴�.
		     * @description
		     */
		    Excel.import = function(device, header, callback) {
		    };
		
		    Excel.convertKey = function(XL_row_object, header) {
		    };
		
		    /**
		     * @method export
		     * @parameter tableId (string)
		     * @parameter booktype (string) - xlsx(default)�� csv�� �����Ѵ�.
		     * @parameter pageId (string) - ���� �����ϸ� ���� �� ���� pageId�� �����Ѵ�.
		     * @parameter data (object) - ���� �����ϸ� �Է� �� table�� ���̴� ���� �ƴ� data ������� export �Ѵ�.
		     * @description tableId�� ���� table�� excel ���Ϸ� export �Ѵ�.
		     */
		    Excel.export = function(id, booktype, pageId, tableData) {
		    };
		})