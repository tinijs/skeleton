import {AppMetas, MetaTranslations} from '@tinijs/meta';

export const suffix = 'My App';
export const suffixTranslations: Record<string, string> = {
  'vi-VN': 'Ứng Dụng Của Tui',
};

export const metas = null as unknown as AppMetas; // use the extracted values from index.html
export const metasTranslations: MetaTranslations = {
  'vi-VN': {
    title: 'Ứng dụng TiniJS',
  },
};
