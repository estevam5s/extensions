import { createXSnippets } from '../model/snippet.fn.js';

export const javascript = createXSnippets({
  rxjs: {
    name: 'rxjs',
    body: 'import { $1 } from \'rxjs\';',
  },
  rxjsop: {
    name: 'rxjs operators',
    body: 'import { $1 } from \'rxjs/operators\';',
  },
  rxjsajax: {
    name: 'rxjs ajax',
    body: 'import { $1 } from \'rxjs/ajax\';',
  },
  rxjswebsockets: {
    name: 'rxjs websockets',
    body: 'import { $1 } from \'rxjs/websockets\';',
  },
});
