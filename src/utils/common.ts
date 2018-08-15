export const isEmpty = (obj) => {
    return obj === undefined || obj === null || Object.keys(obj).length === 0;
};

// https://toughcompetent.com/es5-es6-debounce-react-events-on-inputs/
// tslint:disable-next-line:max-line-length
export function debounce(a,b,c?){var d,e;return function(){function h(){d=null,c||(e=a.apply(f,g))}var f=this,g=arguments;return clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e}}