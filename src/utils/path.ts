import { QueryObject } from '../interfaces';

export const fillPath = (template: string, query: QueryObject) => {
  const paramRegex = /{(\d+|[a-z$_][a-z\d$_]*?(?:\.[a-z\d$_]*?)*?)}/gi;

  return template.replace(paramRegex, (_, key) => {
    let result: QueryObject = query;

    for (const property of key.split('.')) {
      result = result ? result[property] : '';
    }

    return String(result);
  });
};
