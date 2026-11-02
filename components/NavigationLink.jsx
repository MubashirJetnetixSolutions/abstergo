import {forwardRef} from 'react';
// Native links keep page navigation independent of animation/hydration state.
// Browser behavior for keyboard, hashes, downloads and modified clicks is preserved.
const NavigationLink=forwardRef(function NavigationLink({href,prefetch,replace,scroll,shallow,locale,onNavigate,legacyBehavior,passHref,...props},ref){
 const url=typeof href==='string'?href:href?`${href.pathname||''}${href.query?'?'+new URLSearchParams(href.query).toString():''}${href.hash?(href.hash.startsWith('#')?'':'#')+href.hash:''}`:'';
 return <a ref={ref} href={url} {...props}/>;
});
export default NavigationLink;
