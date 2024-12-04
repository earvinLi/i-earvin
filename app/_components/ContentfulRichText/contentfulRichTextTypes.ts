export type TypeMark = {
  type: string;
};

export type TypeParagraphItem = {
  marks: TypeMark[];
};

export type TypeParagraph = {
  content: TypeParagraphItem[];
};

export type TypeEntryHyperlink = {
  data: {
    target: {
      sys: {
        contentType: {
          sys: {
            id: string;
          };
        };
      };
      fields: {
        slug: string;
        title: string;
      };
    };
  };
};

export type TypeHyperlinkItem = {
  nodeType: string;
  value: string;
};

export type TypeHyperlink = {
  content: TypeHyperlinkItem[];
  data: {
    uri: string;
  };
};

export type TypeEmbeddedEntry = {
  data: {
    target: {
      sys: {
        contentType: {
          sys: {
            id: string;
          };
        };
      };
      fields: {
        embedUrl: string;
        title: string;
      };
    };
  };
};

export type TypeEmbeddedAsset = {
  data: {
    target: {
      fields: {
        file: {
          details: {
            image: {
              width: number;
              height: number;
            };
          };
          url: string;
        };
        title: string;
      };
    };
  };
};
