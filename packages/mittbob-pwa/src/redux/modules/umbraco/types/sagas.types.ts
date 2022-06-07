import { WatchGetPayload } from './actions.types';

export type UmbracoObject = Partial<Response>;

export type Payload = { payload: WatchGetPayload; type: string };

export interface Response {
  totalResults: number;
  totalPages: number;
  page: number;
  pageSize: number;
  _links: {
    self: {
      href: string;
    };
    page: { href: string; templated: boolean };
    content: { href: string };
  };
  _embedded: {
    content: [
      {
        writerName: string;
        creatorName: string;
        writerId: number;
        creatorId: number;
        url: string;
        link: { name: string; type: number; url: string };
        parentName: string;
        parentUrl: string;
        parentLink: { name: string; type: number; url: string };
        childrenLinks: Array<string>;
        siblingLinks: Array<string>;
        createDate: string;
        updateDate: string;
        contentTypeAlias: string;
        props: {
          title: { editorAlias: string; value: string };
          text: {
            editorAlias: string;
            value: string;
          };
        };
        name: string;
        parentId: string;
        path: string;
        hasChildren: boolean;
        level: number;
        id: string;
        sortOrder: number;
        _links: {
          self: { href: string };
          root: { href: string };
          children: {
            href: string;
            templated: boolean;
          };
          descendants: {
            href: string;
            templated: boolean;
          };
          ancestors: {
            href: string;
            templated: boolean;
          };
          parent: {
            href: string;
          };
          relatedchildren: {
            href: string;
            templated: boolean;
          };
          relatedparents: {
            href: string;
            templated: boolean;
          };
        };
      },
    ];
  };
}

export interface ResponseNoChildren {
  writerName: string;
  creatorName: string;
  writerId: number;
  creatorId: number;
  url: string;
  link: { name: string; type: number; url: string };
  parentName: string;
  parentUrl: string;
  parentLink: { name: string; type: number; url: string };
  childrenLinks: Array<string>;
  siblingLinks: Array<string>;
  createDate: string;
  updateDate: string;
  contentTypeAlias: string;
  props: {
    title: { editorAlias: string; value: string };
    text: {
      editorAlias: string;
      value: string;
    };
    [key: string]: { editorAlias: string; value: string };
  };
  name: string;
  parentId: string;
  path: string;
  hasChildren: boolean;
  level: number;
  id: string;
  sortOrder: number;
  _links: {
    self: { href: string };
    root: { href: string };
    children: {
      href: string;
      templated: boolean;
    };
    descendants: {
      href: string;
      templated: boolean;
    };
    ancestors: {
      href: string;
      templated: boolean;
    };
    parent: {
      href: string;
    };
    relatedchildren: {
      href: string;
      templated: boolean;
    };
    relatedparents: {
      href: string;
      templated: boolean;
    };
  };
}
