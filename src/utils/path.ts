import { Model } from '../interfaces';

export const fillPath = (template: string, query: Model = {}): string => {
  const paramRegex = /{(\d+|[a-z$_][a-z\d$_]*?(?:\.[a-z\d$_]*?)*?)}/gi;

  return template.replace(paramRegex, (_, key) => {
    let result: unknown = query;

    for (const property of key.split('.')) {
      result = result ? (result as Model)[property] : '';
    }

    return String(result);
  });
};
