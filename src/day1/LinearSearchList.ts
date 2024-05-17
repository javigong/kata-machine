export default function linear_search(haystack: number[], needle: number): boolean {

  for (let i = 0; i < haystack.length; ++i) {
    const element = haystack[i];
    
    if (element === needle) {

      return true;
    }
  }

  return false;
}