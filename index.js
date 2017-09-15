/**
 * Function to get all matches of a regular expression
 * @name matchAll
 * @function
 * @param {String}        String - String to search regular expressions
 * @param {RegExp|String} regex  - Regular expression
 * @param {String|Array}   flags  - Flags of regular expression
 * @return {String}
 */
 
module.exports = function regexAllMatches(string, regex, flags) {
    
    // If argument string is not regex or string
    if(!(regex instanceof RegExp) && typeof regex != "string")
        throw "regexAllMatches: String argument need to be Regexp object or a string";
        
    /**
     * Data to return
     * @var {Object} data
     */
    var data = {
        regex: regex instanceof RegExp ? regex : new RegExp(regex, (flags instanceof Array ? flags.join("") : flags)),
        string: string
    };
    
    // Matches groups
    data["groups"] = (function() {
            /**
             * Get matches of a string with regex
             * @var {Object} m
             */
            var m;
            
            /**
             * Groups with matches to return
             * @var {Array} matches
             */
            var groups = {};
            
            while ((m = data.regex.exec(data.string)) !== null) {
                
                // The result can be accessed through the `m`-variable.
                m.forEach(function(match, groupIndex) {
                    if(!groups[groupIndex])
                        groups[groupIndex] = [];
                    
                        groups[groupIndex].push(match);
                });
                
                // This is data to avoid infinite loops with zero-width matches
                if (m.index === data.regex.lastIndex)
                    break;
            }
            
            return groups;
        })();
    
    return data;
};