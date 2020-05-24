exports.command = function (typeOf, xp){
    if(xp == undefined) xp = typeOf;
    if(typeOf == "XPath") this.useXpath();
    this
        .waitForElementVisible(xp)
        .click(xp);
    if(typeOf == "XPath") this.useCss();
                
    return this;
}