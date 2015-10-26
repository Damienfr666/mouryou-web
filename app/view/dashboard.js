var dashboard = dashboard || {};

(function() {
  'use strict';

  dashboard.view = function(ctrl) {
    document.title = 'mouryou';

    return m('.row', [
      m('.col-md-9', [
        m('.chart', [
          m('#chart-block.m-a-sm', {
            config: dashboard.plotter(ctrl)
          })
        ])
      ]),
      m('.col-md-3', [
        m('ul.list-group.small', [
          ctrl.hypervisors().map(function(hypervisor) {
            return [
              m('li.list-group-item.bg-mouryou.text-white.border-mouryou.p-a-sm.animated.fadeInRight', [
                m('i.fa.fa-fw.fa-server.m-r-sm'),
                m('span.bold', hypervisor.host)
              ]),
              hypervisor.virtual_machines.map(function(machine, i) {
                return m('li.list-group-item.p-a-sm.animated.fadeInRight', {
                  style: animationDelay(i)
                }, [
                  m('i.fa.fa-fw.fa-hdd-o.m-r-sm'),
                  m('span.bold', machine.host),
                  m('span.label.label-pill.bg-default.text-white.pull-right', [
                    m('i.fa.fa-fw.fa-power-off')
                  ])
                ]);
              })
            ];
          })
        ])
      ])
    ]);
  };
})();
