/** C = Config, P = Props, MP = MergedProps Props */
declare type HOF<C, P, IP> = (config?: C) => (WrappedComponent: React.SFC<P>) => React.SFC<P & IP>
