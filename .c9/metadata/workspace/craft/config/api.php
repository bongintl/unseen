{"changed":false,"filter":false,"title":"api.php","tooltip":"/craft/config/api.php","value":"<?php\t\nnamespace Craft;\n\nreturn [\n    'base' => 'api',\n    'cache' => false,\n    'routes' => [\n        '' => function () {\n            $entries = craft()\n                -> elements\n                -> getCriteria( ElementType::Entry, [\n                    'section' => 'projects',\n                    'limit' => null\n                ]);\n            $projects = [];\n            foreach ( $entries as $entry ) {\n                $projects[] = [\n                    'title' => $entry -> title,\n                    'slug' => $entry -> slug,\n                    'thumbnail' => image( $entry -> thumbnail -> first() )\n                ];\n            }\n            return [\n                'introText' => craft()->globals->getSetByHandle('globals')->introText,\n                'projects' => $projects\n            ];\n        },\n        '/project/{slug}' => function ( $params, $query ) {\n            $entry = craft()\n                -> elements\n                -> getCriteria( ElementType::Entry, [\n                    'section' => 'projects',\n                    'slug' => $params['slug'],\n                    'limit' => null\n                ])\n                -> first();\n            $element = null;\n            if ( count( $entry -> element ) ) {\n                $elementEntry = $entry -> element -> first();\n                $sections = [];\n                foreach ( $elementEntry -> sections as $section ) {\n                    $sections []= [\n                        'heading' => $section -> heading,\n                        'body' => $section -> body ? $section -> body -> getParsedContent() : '',\n                    ];\n                }\n                $element = [\n                    'title' => $elementEntry -> title,\n                    'summary' => $elementEntry -> summary,\n                    'sections' => $sections,\n                    'symbolDark' => asset( $elementEntry -> symbolDark -> first() ),\n                    'symbolLight' => asset( $elementEntry -> symbolLight -> first() ),\n                ];\n            }\n            return [\n                'type' => 'project',\n                'title' => $entry -> title,\n                'slug' => $entry -> slug,\n                'summary' => $entry -> summary,\n                'thumbnail' => image( $entry -> thumbnail -> first() ),\n                'blocks' => blocks( $entry -> blocks ),\n                'url' => $entry -> getUrl(),\n                'description' => $entry -> description ? $entry -> description -> getParsedContent() : '',\n                'quote' => $entry -> quote ? $entry -> quote -> getParsedContent() : '',\n                'attribution' => $entry -> attribution ? $entry -> attribution -> getParsedContent() : '',\n                'element' => $element\n            ];\n        },\n        '/conceptroom' => function ( $params, $query ) {\n            $entries = craft()\n                -> elements\n                -> getCriteria( ElementType::Entry, [\n                    'section' => 'conceptroom',\n                    'limit' => null\n                ]);\n            $conceptroom = [];\n            foreach ( $entries as $entry ) {\n                $conceptroom[] = [\n                    'title' => $entry -> title,\n                    'slug' => $entry -> slug,\n                    'summary' => $entry -> summary,\n                    'composition' => (int) $entry -> composition -> value,\n                    'thumbnails' => assets( $entry -> thumbnails )\n                ];\n            }\n            return $conceptroom;\n        },\n        '/conceptroom/{slug}' => function ( $params, $query ) {\n            $entry = craft()\n                -> elements\n                -> getCriteria( ElementType::Entry, [\n                    'section' => 'conceptroom',\n                    'slug' => $params['slug'],\n                    'limit' => null\n                ])\n                -> first();\n            return [\n                'type' => 'conceptroom',\n                'title' => $entry -> title,\n                'slug' => $entry -> slug,\n                'summary' => $entry -> summary,\n                'composition' => (int) $entry -> composition -> value,\n                'thumbnails' => assets( $entry -> thumbnails ),\n                'blocks' => blocks( $entry -> blocks ),\n                'description' => $entry -> description ? $entry -> description -> getParsedContent() : '',\n                'quote' => $entry -> quote ? $entry -> quote -> getParsedContent() : '',\n                'attribution' => $entry -> attribution ? $entry -> attribution -> getParsedContent() : ''\n            ];\n        },\n        '/about' => function ( $params, $query ) {\n            $entry = craft()\n                -> elements\n                -> getCriteria( ElementType::Entry, [ 'section' => 'about' ] )\n                -> first();\n            $people = [];\n            foreach ( $entry -> people as $block ) {\n                $people []= [\n                    'name' => $block -> personName,\n                    'bio' => $block -> bio ? $block -> bio -> getParsedContent() : ''\n                ];\n            }\n            return [\n                'video' => video( $entry -> video -> first() ),\n                'body' => $entry -> body ? $entry -> body -> getParsedContent() : '',\n                'people' => $people,\n                'clients' => assets( $entry -> clients ),\n                'quote' => $entry -> quote ? $entry -> quote -> getParsedContent() : '',\n                'attribution' => $entry -> attribution ? $entry -> attribution -> getParsedContent() : '',\n                'description' => $entry -> description ? $entry -> description -> getParsedContent() : ''\n            ];\n        },\n        '/contact' => function ( $params, $query ) {\n            $entry = craft()\n                -> elements\n                -> getCriteria( ElementType::Entry, [ 'section' => 'contact' ] )\n                -> first();\n            return [\n                'heading' => $entry -> heading,\n                'body' => $entry -> body ? $entry -> body -> getParsedContent() : '',\n                'newsletterCTA' => $entry -> newsletterCta,\n                'regNumber' => $entry -> regNumber\n            ];\n        },\n        '/news/{page}' => function ( $params ) {\n            $entries = craft()\n                -> elements\n                -> getCriteria( ElementType::Entry, [\n                    'section' => 'news',\n                    'offset' => $params[ 'page' ] * 4,\n                    'limit' => 4,\n                ]);\n            $news = [];\n            foreach ( $entries as $entry ) {\n                $news []= [\n                    'title' => $entry -> title,\n                    'type' => 'news',\n                    'thumbnail' => asset( $entry -> thumbnail -> first() ),\n                    'body' => $entry -> body ? $entry -> body -> getParsedContent() : '',\n                    'year' => $entry -> postDate -> format('Y')\n                ];\n            }\n            return $news;\n        }\n    ]\n\n];\n\nfunction projects ( $entries ) {\n    $projects = [];\n    foreach ( $entries as $entry ) {\n        $projects[] = [\n            'title' => $entry -> title,\n            'slug' => $entry -> slug,\n            'thumbnail' => image( $entry -> thumbnail -> first() )\n        ];\n    }\n    return $projects;\n}\n\nfunction project ( $entry ) {\n    return [\n        'type' => 'project',\n        'title' => $entry -> title,\n        'slug' => $entry -> slug,\n        'summary' => $entry -> summary,\n        'thumbnail' => image( $entry -> thumbnail -> first() ),\n        'blocks' => blocks( $entry -> blocks ),\n        'url' => $entry -> getUrl(),\n        'description' => $entry -> description ? $entry -> description -> getParsedContent() : '',\n        'quote' => $entry -> quote ? $entry -> quote -> getParsedContent() : '',\n        'attribution' => $entry -> attribution ? $entry -> attribution -> getParsedContent() : '',\n        'element' => count( $entry -> element ) ? $entry -> element -> first() -> slug : null\n    ];\n}\n\nfunction blocks ( $matrix ) {\n    $blocks = [];\n    foreach ( $matrix as $block ) {\n        $item = [\n            'type' => (string) $block -> type\n        ];\n        switch ( $block -> type ) {\n            case 'text':\n                $item[ 'text' ] = $block -> text;\n                break;\n            case 'asset':\n                $item[ 'asset' ] = asset( $block -> asset -> first() );\n                $item[ 'caption' ] = $block -> caption;\n                break;\n            case 'twoAssets':\n                $item[ 'assets' ] = assets( $block -> assets );\n                $item[ 'order' ] = $block -> order -> value;\n                break;\n        }\n        $blocks []= $item;\n    }\n    return $blocks;\n}\n\nfunction assets ( $assets ) {\n    $ret = [];\n    foreach ( $assets as $asset ) $ret []= asset( $asset );\n    return $ret;\n}\n\nfunction asset ( $asset ) {\n    switch ( $asset -> kind ) {\n        case 'image': return image( $asset );\n        case 'video': return video( $asset );\n    }\n}\n\nfunction image ( $asset ) {\n\t$transforms = craft() -> assetTransforms -> allTransforms;\n\t$sortByWidth = function ( $transformA, $transformB ) {\n        return $transformA -> width > $transformB -> width ? 1 : -1;\n    };\n    usort( $transforms, $sortByWidth );\n    $naturalWidth = (int) $asset -> getWidth();\n    $naturalHeight = (int) $asset -> getHeight();\n    $srcs = [];\n\tforeach ( $transforms as $transform ) {\n\t\tif ( $transform -> width > $naturalWidth ) continue;\n\t\t$srcs[] = [\n\t\t    'size' => [\n\t\t        $asset -> getWidth( $transform ),\n\t\t        $asset -> getHeight( $transform )\n            ],\n\t\t\t'url' => $asset -> getUrl( $transform )\n\t\t];\n\t}\n\tif ( count( $srcs ) < count( $transforms ) ) {\n\t\t$natural = $asset -> getUrl([\n\t\t\t'mode' => 'crop',\n\t\t\t'width' => $naturalWidth,\n\t\t\t'height' => $naturalHeight,\n\t\t\t'quality' => 75\n\t\t]);\n\t\t$srcs[] = [\n\t\t    'size' => [ $naturalWidth, $naturalHeight ],\n\t\t\t'url' => $natural\n\t\t];\n\t}\n\treturn [\n\t    'type' => 'image',\n\t    'id' => $asset -> id,\n\t    'size' => [ $naturalWidth, $naturalHeight ],\n\t    'srcs' => $srcs\n\t];\n}\n\nfunction video ( $asset ) {\n    return [\n        'type' => 'video',\n        'id' => $asset -> id,\n        'src' => $asset -> url\n    ];\n}","undoManager":{"mark":-1,"position":-1,"stack":[]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":152,"column":44},"end":{"row":152,"column":44},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1526305510860}