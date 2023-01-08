import {CSSResult} from 'lit';

export const unistylus = (classNames?: TemplateStringsArray) => {
  return classNames as unknown as CSSResult;
};
