export declare const CHECKOUT_URLS: {
  readonly isleCheats: string;
  readonly hwidSpoofer: string;
  readonly skinChanger: string;
  readonly ugc: string;
};

export declare const CHECKOUT_PATH_REDIRECTS: ReadonlyMap<string, string>;

export declare function resolveCheckoutPathRedirect(pathname: string): string | null;
