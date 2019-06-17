{"filter":false,"title":"Header.js","tooltip":"/js/components/Header.js","undoManager":{"mark":96,"position":96,"stack":[[{"start":{"row":0,"column":0},"end":{"row":10,"column":1},"action":"insert","lines":["var m = require('mithril');","var ScrollAnimation = require('./ScrollAnimation');","","module.exports = {","    view: () => m( ScrollAnimation, {","        className: 'scroll-indicator',","        view: rect => m('.scroll-indicator__text', {","            style: { opacity: rect.top < 0 ? 0 : 1 }","        }, 'Scroll' )","    })","}"],"id":1}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":36},"action":"remove","lines":["scroll-indicator"],"id":3},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["h"]}],[{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["e"],"id":4}],[{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["a"],"id":5}],[{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":["d"],"id":6}],[{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":["e"],"id":7}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["r"],"id":8}],[{"start":{"row":6,"column":26},"end":{"row":6,"column":42},"action":"remove","lines":["scroll-indicator"],"id":9},{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":["h"]}],[{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["e"],"id":10}],[{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":["d"],"id":11}],[{"start":{"row":6,"column":29},"end":{"row":6,"column":30},"action":"insert","lines":["a"],"id":12}],[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":["d"],"id":13}],[{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"insert","lines":["e"],"id":14}],[{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"insert","lines":["r"],"id":15}],[{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"remove","lines":["r"],"id":16}],[{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"remove","lines":["e"],"id":17}],[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"remove","lines":["d"],"id":18}],[{"start":{"row":6,"column":29},"end":{"row":6,"column":30},"action":"remove","lines":["a"],"id":19}],[{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"remove","lines":["d"],"id":20}],[{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":["a"],"id":21}],[{"start":{"row":6,"column":29},"end":{"row":6,"column":30},"action":"insert","lines":["d"],"id":22}],[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":["e"],"id":23}],[{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"insert","lines":["r"],"id":24}],[{"start":{"row":7,"column":45},"end":{"row":7,"column":46},"action":"remove","lines":["0"],"id":25}],[{"start":{"row":7,"column":45},"end":{"row":7,"column":46},"action":"insert","lines":["2"],"id":26}],[{"start":{"row":7,"column":45},"end":{"row":7,"column":46},"action":"remove","lines":["2"],"id":27}],[{"start":{"row":7,"column":45},"end":{"row":7,"column":46},"action":"insert","lines":["1"],"id":28}],[{"start":{"row":7,"column":50},"end":{"row":7,"column":51},"action":"insert","lines":["0"],"id":29}],[{"start":{"row":7,"column":50},"end":{"row":7,"column":51},"action":"remove","lines":["0"],"id":30}],[{"start":{"row":7,"column":49},"end":{"row":7,"column":50},"action":"remove","lines":["1"],"id":31}],[{"start":{"row":7,"column":49},"end":{"row":7,"column":50},"action":"insert","lines":["0"],"id":32}],[{"start":{"row":7,"column":42},"end":{"row":7,"column":43},"action":"insert","lines":[" "],"id":33}],[{"start":{"row":7,"column":43},"end":{"row":7,"column":44},"action":"insert","lines":["&"],"id":34}],[{"start":{"row":7,"column":44},"end":{"row":7,"column":45},"action":"insert","lines":["&"],"id":35}],[{"start":{"row":7,"column":45},"end":{"row":7,"column":46},"action":"insert","lines":[" "],"id":36}],[{"start":{"row":7,"column":46},"end":{"row":7,"column":47},"action":"insert","lines":["r"],"id":37}],[{"start":{"row":7,"column":47},"end":{"row":7,"column":48},"action":"insert","lines":["e"],"id":38}],[{"start":{"row":7,"column":48},"end":{"row":7,"column":49},"action":"insert","lines":["c"],"id":39}],[{"start":{"row":7,"column":49},"end":{"row":7,"column":50},"action":"insert","lines":["t"],"id":40}],[{"start":{"row":7,"column":50},"end":{"row":7,"column":51},"action":"insert","lines":["."],"id":41}],[{"start":{"row":7,"column":51},"end":{"row":7,"column":52},"action":"insert","lines":["b"],"id":42}],[{"start":{"row":7,"column":52},"end":{"row":7,"column":53},"action":"insert","lines":["o"],"id":43}],[{"start":{"row":7,"column":53},"end":{"row":7,"column":54},"action":"insert","lines":["t"],"id":44}],[{"start":{"row":7,"column":54},"end":{"row":7,"column":55},"action":"insert","lines":["t"],"id":45}],[{"start":{"row":7,"column":55},"end":{"row":7,"column":56},"action":"insert","lines":["o"],"id":46}],[{"start":{"row":7,"column":56},"end":{"row":7,"column":57},"action":"insert","lines":["m"],"id":47}],[{"start":{"row":7,"column":57},"end":{"row":7,"column":58},"action":"insert","lines":[" "],"id":48}],[{"start":{"row":7,"column":58},"end":{"row":7,"column":59},"action":"insert","lines":[">"],"id":49}],[{"start":{"row":7,"column":59},"end":{"row":7,"column":60},"action":"insert","lines":[" "],"id":50}],[{"start":{"row":7,"column":60},"end":{"row":7,"column":61},"action":"insert","lines":["0"],"id":51}],[{"start":{"row":4,"column":11},"end":{"row":4,"column":13},"action":"insert","lines":["{}"],"id":52}],[{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":[" "],"id":53}],[{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":[" "],"id":54}],[{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["c"],"id":55}],[{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["h"],"id":56}],[{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["i"],"id":57}],[{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["l"],"id":58}],[{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["d"],"id":59}],[{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["r"],"id":60}],[{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["e"],"id":61}],[{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["n"],"id":62}],[{"start":{"row":8,"column":11},"end":{"row":8,"column":19},"action":"remove","lines":["'Scroll'"],"id":63},{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"insert","lines":["c"]}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["h"],"id":64}],[{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["i"],"id":65}],[{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["l"],"id":66}],[{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["r"],"id":67}],[{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["e"],"id":68}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["n"],"id":69}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"remove","lines":["n"],"id":70}],[{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"remove","lines":["e"],"id":71}],[{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"remove","lines":["r"],"id":72}],[{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"remove","lines":["l"],"id":73}],[{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"remove","lines":["i"],"id":74}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"remove","lines":["h"],"id":75}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["h"],"id":76}],[{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["i"],"id":77}],[{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["l"],"id":78}],[{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["d"],"id":79}],[{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["r"],"id":80}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["e"],"id":81}],[{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["n"],"id":82}],[{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":["h"],"id":83}],[{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":["6"],"id":84}],[{"start":{"row":7,"column":41},"end":{"row":7,"column":42},"action":"remove","lines":["0"],"id":85},{"start":{"row":7,"column":41},"end":{"row":7,"column":42},"action":"insert","lines":["w"]}],[{"start":{"row":7,"column":42},"end":{"row":7,"column":43},"action":"insert","lines":["i"],"id":86}],[{"start":{"row":7,"column":43},"end":{"row":7,"column":44},"action":"insert","lines":["n"],"id":87}],[{"start":{"row":7,"column":44},"end":{"row":7,"column":45},"action":"insert","lines":["d"],"id":88}],[{"start":{"row":7,"column":45},"end":{"row":7,"column":46},"action":"insert","lines":["o"],"id":89}],[{"start":{"row":7,"column":46},"end":{"row":7,"column":47},"action":"insert","lines":["w"],"id":90}],[{"start":{"row":7,"column":47},"end":{"row":7,"column":48},"action":"insert","lines":["i"],"id":91}],[{"start":{"row":7,"column":48},"end":{"row":7,"column":49},"action":"insert","lines":["n"],"id":92}],[{"start":{"row":7,"column":48},"end":{"row":7,"column":49},"action":"remove","lines":["n"],"id":93}],[{"start":{"row":7,"column":47},"end":{"row":7,"column":48},"action":"remove","lines":["i"],"id":94}],[{"start":{"row":7,"column":47},"end":{"row":7,"column":48},"action":"insert","lines":["."],"id":95}],[{"start":{"row":7,"column":48},"end":{"row":7,"column":49},"action":"insert","lines":["i"],"id":96}],[{"start":{"row":7,"column":49},"end":{"row":7,"column":50},"action":"insert","lines":["n"],"id":97}],[{"start":{"row":7,"column":48},"end":{"row":7,"column":50},"action":"remove","lines":["in"],"id":98},{"start":{"row":7,"column":48},"end":{"row":7,"column":59},"action":"insert","lines":["innerHeight"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":59},"end":{"row":7,"column":59},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1528026260009,"hash":"3042d8000efc013cd7d353dfe722022414714499"}