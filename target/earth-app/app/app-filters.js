var earthFilters = angular.module("earthFilters", []);

earthFilters.filter("myDate", function(gettextCatalog) {
    return function(input, format) {
        var date = new Date(input * 1000);
        
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        
        if (gettextCatalog.currentLanguage === "de") {
            var dateFormat = day + "." + month + "." + year;
            var timeFormat = hour + ":" + minute;
        } else {
            var dateFormat = year + "-" + month + "-" + day;
            var timeFormat = hour + ":" + minute;
        }
        
        if (format === "date") {
            return dateFormat;
        } else if (format === "time") {
            return timeFormat;
        } else {
            return dateFormat + " " + timeFormat;
        }
    };
});

earthFilters.filter("myCurrency", function(gettextCatalog) {
    return function(input, currency) {
        var thousandsSeparator = ",";
        var decimalSeparator = ".";
        
        if (gettextCatalog.currentLanguage === "de") {
            thousandsSeparator = " ";
            decimalSeparator = ",";
        }
        
        var valueString = new String(input).replace(".", decimalSeparator);
        
        var thousands = /(\d+)(\d{3})/;
        valueString = valueString.replace(/^\d+/, function(w) {
            while(thousands.test(w)){
                w= w.replace(thousands, "$1" + thousandsSeparator + "$2");
            }
            return w;
        });
        
        if (currency === "CNY") {
            valueString += " RMB";
        }
        
        return valueString;
    };
});