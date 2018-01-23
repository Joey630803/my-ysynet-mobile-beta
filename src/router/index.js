import { loginCheck } from '../utils';
import { hashHistory } from 'react-router';
export const routes =  {
  childRoutes: [
    {
      path: '/',//主页
      component: require('../container/home').default,
      onEnter: (nextState, replace, next) => { //这里是路由重定向
        loginCheck().then(
          data => {
            if (data.status) {
              next();
            } else {
              hashHistory.push({pathname: '/login'})
            }
          },
          err => {
            console.log(err)
          }
        )
        next();
      }
    },
    {
      path: '/login',//登录页
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../container/login').default)
        }, 'login')
      }
    },
    {
      path: '/product',//产品
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../container/product').default)
        }, 'product')
      }
    },
    {
      path: '/deliveryCheck',//送货单验收
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../container/deliveryCheck').default)
        }, 'deliveryCheck')
      },
      childRoutes: [
        {
          path: '/deliveryCheck/detail',//送货单验收详情
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/deliveryCheck/detail').default)
            }, '/deliveryCheck/detail')
          }
        }
      ]
    },
    {
      path: '/equipment',//设备
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../container/equipment').default)
        }, 'equipment')
      },
      childRoutes: [
        {
          path: '/equipment/equipmentRepaire',//设备维修单
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/repair').default)
            }, '/equipment/equipmentRepaire')
          }
        },
        {
          path: '/equipment/equipmentDetail',//设备详情
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/repair/details').default)
            }, '/equipment/equipmentDetail')
          }
        },
        {
          path: '/equipment/troubleEdit',//设备详情
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/repair/edit').default)
            }, '/equipment/troubleEdit')
          }
        },
        //编辑 故障描述
        {
          path: '/equipment/editTroubdesc',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/repair/editTroubdesc').default)
            }, '/equipment/editTroubdesc')
          }
        },
        //故障原因 选择
        {
          path: '/equipment/selectCause',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/repair/selectCause').default)
            }, '/equipment/selectCause')
          }
        },
        //添加备注
        {
          path: '/equipment/addRemark',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/repair/remark').default)
            }, '/equipment/addRemark')
          }
        },
        //预估费用
        {
          path: '/equipment/estimateFee',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/repair/EstimateFee').default)
            }, '/equipment/estimateFee')
          }
        },
        //编辑工单信息
        {
          path: '/equipment/editOrder',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/repair/editOrderInfo').default)
            }, '/equipment/editOrder')
          }
        },
        { 
          path: '/equipment/list',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/list').default)
            }, 'equipment/list')
          }
        },
        { 
          path: '/equipment/firstDetails',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/firstDetails').default)
            }, 'equipment/firstDetails')
          }
        },
        { 
          path: '/equipment/secondDetails',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/secondDetails').default)
            }, 'equipment/secondDetails')
          }
        },
        { 
          path: '/equipment/applyRepair',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/applyRepair').default)
            }, 'equipment/applyRepair')
          }
        },
        { 
          path: '/equipment/repairList',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/repairList').default)
            }, 'equipment/repairList')
          }
        },
        { 
          path: '/equipment/applyMaintain',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/applyMaintain').default)
            }, 'equipment/applyMaintain')
          }
        },
        { 
          path: '/equipment/repairRecord',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/repairRecord').default)
            }, 'equipment/repairRecord')
          }
        },
        { 
          path: '/equipment/maintainRecord',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/maintainRecord').default)
            }, 'equipment/maintainRecord')
          }
        },
        { 
          path: '/equipment/do',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/equipment/do').default)
            }, 'equipment/do')
          }
        }
      ]

    },
    {
      path: '/profile',//用户
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../container/profile').default)
        }, 'profile')
        //console.log(nextState.routes)
        // nextState指路由全部、并添加了当前的路由和子路由
      },
      onEnter: (nextState, replace, next) => {
        next();
      },
      childRoutes: [
        {
          path: '/profile/institution',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/profile/institution').default)
            }, 'profile/institution')
          }
        },
        { 
          path: '/profile/user',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/profile/user2').default)
            }, 'profile/user')
          },
          childRoutes: [
            { 
              path: '/profile/user/changeName',
              getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                  const C = require('../container/profile/changeName').default;
                  //console.log(C)
                  cb(null, C)
                }, '/profile/user/changeName')
              }
            },
            { 
              path: '/profile/user/changeNumber',
              getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                  const C = require('../container/profile/changeNumber').default;
                  //console.log(C)
                  cb(null, C)
                }, '/profile/user/changeNumber')
              }
            },
            { 
              path: '/profile/user/changePw',
              getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                  const C = require('../container/profile/changePw').default;
                  //console.log(C)
                  cb(null, C)
                }, '/profile/user/changePw')
              }
            }
          ]
        }
      ]  
    },
    {
      path: '/order',//订单
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../container/order').default)
        }, 'order')
      },
      childRoutes: [
        { 
          path: '/order/:id',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/order/detail').default)
            }, 'order/detail')
          }
        }, { 
          path: '/order/:id/:packageId',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/order/operdetail').default)
            }, 'order/operdetail')
          }
        }, { 
          path: '/order/:id/:packageId/:other',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/order/operother').default)
            }, 'order/operother')
          }
        }
      ]
    },
    {
      path: '/supplier',
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../container/supplier').default)
        }, 'supplier')
      },
      childRoutes: [
        { 
          path: '/supplier/:id',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/supplier/detail').default)
            }, 'supplier/detail')
          },
        }
      ]
    },
    {
      path: '/delivery',//送货单
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../container/delivery').default)
        }, 'delivery')
      }
    },
    {
      path: '/invoice',//查询页面
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../container/invoice').default)
        }, 'invoice')
      },
      childRoutes: [
        { 
          path: '/invoice/:id',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/invoice/detail').default)
            }, 'invoice/detail')
          },
        }
      ]
    }, 
    {
      path: '/search',//查询页面
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../container/search').default)
        }, 'search')
      }
    },
    {
      path: '/test',// 测试页面
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../container/test').default)
        }, 'test')
      }
    },
    {
      path: '/auditMgt',//审批管理
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../container/auditMgt').default)
        }, 'auditMgt')
      },
      childRoutes: [
        { 
          path: '/auditMgt/details',
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/auditMgt/details').default)
            }, 'auditMgt/details')
          },
        }
      ]
    },
  ]
}