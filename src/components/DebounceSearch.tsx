class DebounceSearch extends React.Component<any, any>{
    debounce(funct: () => void, delay: number) {
        let timerId: any;
        return function (...rest) {
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
                funct.apply(null, ...rest);
                timerId = null;
            }, delay);
        }
    }

    render() {
        return (
            <input type='text' onChange={this.props.onChangeF} />
        )
    }
}