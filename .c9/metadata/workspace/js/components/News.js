{"filter":false,"title":"News.js","tooltip":"/js/components/News.js","undoManager":{"mark":17,"position":17,"stack":[[{"start":{"row":61,"column":0},"end":{"row":62,"column":0},"action":"remove","lines":["        console.log( window.innerWidth, BREAKPOINTS.small )",""],"id":9160}],[{"start":{"row":39,"column":0},"end":{"row":55,"column":1},"action":"remove","lines":["","var NewsByYear = {","    view: ({ attrs: { items }}) => {","        var years = [];","        for ( var i = 0; i < items.length; i += 2 ) {","            var y = items[ i ].year;","            if ( !years.length || last( years ).year !== y ) {","                years.push({","                    year: y,","                    items: []","                });","            }","            last( years ).items.push( items[ i ], items[ i + 1 ] );","        }","        return years.map( year => m( Year, year ) );","    }","}"],"id":9161}],[{"start":{"row":38,"column":1},"end":{"row":39,"column":0},"action":"remove","lines":["",""],"id":9162}],[{"start":{"row":8,"column":29},"end":{"row":8,"column":37},"action":"remove","lines":[".m-col-6"],"id":9163}],[{"start":{"row":46,"column":26},"end":{"row":46,"column":27},"action":"insert","lines":["."],"id":9164}],[{"start":{"row":46,"column":27},"end":{"row":46,"column":28},"action":"insert","lines":["r"],"id":9165}],[{"start":{"row":46,"column":28},"end":{"row":46,"column":29},"action":"insert","lines":["o"],"id":9166}],[{"start":{"row":46,"column":29},"end":{"row":46,"column":30},"action":"insert","lines":["w"],"id":9167}],[{"start":{"row":46,"column":27},"end":{"row":46,"column":28},"action":"insert","lines":["n"],"id":9168}],[{"start":{"row":46,"column":28},"end":{"row":46,"column":29},"action":"insert","lines":["e"],"id":9169}],[{"start":{"row":46,"column":29},"end":{"row":46,"column":30},"action":"insert","lines":["w"],"id":9170}],[{"start":{"row":46,"column":30},"end":{"row":46,"column":31},"action":"insert","lines":["s"],"id":9171}],[{"start":{"row":46,"column":31},"end":{"row":46,"column":32},"action":"insert","lines":["_"],"id":9172}],[{"start":{"row":46,"column":32},"end":{"row":46,"column":33},"action":"insert","lines":["_"],"id":9173}],[{"start":{"row":46,"column":27},"end":{"row":46,"column":28},"action":"insert","lines":["r"],"id":9174}],[{"start":{"row":46,"column":28},"end":{"row":46,"column":29},"action":"insert","lines":["o"],"id":9175}],[{"start":{"row":46,"column":29},"end":{"row":46,"column":30},"action":"insert","lines":["w"],"id":9176}],[{"start":{"row":46,"column":30},"end":{"row":46,"column":31},"action":"insert","lines":["."],"id":9177}]]},"ace":{"folds":[],"scrolltop":636.5,"scrollleft":0,"selection":{"start":{"row":46,"column":31},"end":{"row":46,"column":31},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1528196727377,"hash":"08dcbe1bc7ed2d900e378fc0da3d698ee8dc1b0f"}