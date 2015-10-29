/* jshint -W079 */
var mockData = (function () {
    return {
        getOrders: getOrders,
        getProducts: getProducts,
        getProductTypes: getProductTypes,
        getPayways: getPayways,
        getWechats: getWechats,
        getComponents: getComponents,
        getSpecs: getSpecs
    };

    function getOrders() {
        var template = {
            'list|1-10': [{
                customerInfo: {
                    tel: '18519991000',
                    wechat: '@name',
                    address: '@region',
                    name: '@name'
                },
                orderInfo: {
                    payway: '支付宝',
                    serial: '@datetime("yyyyMMddAHHmmss")',
                    remark: '@sentence(5)',
                    wechat: 'wechat for test'
                },
                'products|1-5': [{
                    name: '@sentence(4,6)',
                    image: '@dataImage("40x40","产品")',
                    'components|1-5': {
                        image: '@dataImage("40x40","配件")',
                        name: '@sentence(1)',
                        qty: '@integer(1,10)',
                        price: '@float(1,100,0,2)'
                    },
                    price: 0,
                    remark: '@sentence(5)',
                    qty: '@integer(1,10)'
                }]
            }]
        };
        return Mock.mock(template).list;
    }

    function getProducts() {
        var template = {
            'list|1-10': [{
                name: '@sentence(4,6)',
                image: '@dataImage("40x40","产品")',
                'components|1-5': [{
                    image: '@dataImage("40x40","配件")',
                    name: '@sentence(1)',
                    qty: '@integer(1,10)',
                    price: '@float(1,100,0,2)'
                }],
                price: 0
            }]
        };

        return Mock.mock(template).list;
    }

    function getProductTypes() {
        var template = {
            'list|1-10': ['@sentence(1)']
        };
        return Mock.mock(template).list;
    }

    function getPayways() {
        var template = {
            'list|1-10':[
                '@sentence(1)'
            ]
        };
        return Mock.mock(template).list;
    }

    function getWechats() {
        var template = {
            'list|1-10': [
                '@sentence(1)'
            ]
        };
        return Mock.mock(template).list;
    }

    function  getComponents() {
        var template = {
            'list|1-50': [{
                name: '@word(10)',
                id: '@id()',
                image: '@dataImage("40x40","配件")',
                price: '@float(1,100,0,2)'
            }]
        };
        return Mock.mock(template).list;
    }

    function getSpecs () {
        var template = {
            'list|5-50': [
                {
                    id: '@id()',
                    name: '@word(5)',
                    typeid: '@id()',
                    typename: '@word(4)',
                    spec: '@word(2)',
                    unit: '@word(1)',
                    isuniform: '@boolean()'
                }
            ]
        };
        return Mock.mock(template).list;
    }
})
();
