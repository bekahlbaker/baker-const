const Text = ({ children, ...restProps }) => {
    return <text {...restProps}>{children}</text>;
};

export default Text;