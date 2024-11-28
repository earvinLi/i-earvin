export type TMark = {
  type: string;
};

export type TParagraphItem = {
  marks: TMark[];
};

export type TParagraph = {
  content: TParagraphItem[];
};

export type TEntryHyperlink = {
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

export type THyperlinkItem = {
  nodeType: string;
  value: string;
};

export type THyperlink = {
  content: THyperlinkItem[];
  data: {
    uri: string;
  };
};

export type TEmbeddedEntry = {
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

export type TEmbeddedAsset = {
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
