class Helper {

    constructor() {
    };

    shorten(original){
        if(original.length > 40) {
            return original.substring(0, 40) + "...";
        } else {
            return original;
        }
    }

    formatDate(d) {
        var dMonth = (d.getMonth() + 1).toString().length < 2 ?  '0'+ (d.getMonth()+1).toString() : (d.getMonth()+1).toString()
        var dDay = (d.getDate()).toString().length < 2 ?  '0'+ (d.getDate()).toString() : (d.getDate()).toString()
        var dYear = d.getFullYear().toString();
        var dString = dMonth + '/' + dDay + '/' + dYear;
        return dString;
    }

    toTitleCase(original) {
        var new_string = original.toLowerCase().split(' ').map( word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        if(new_string.length > 35){
            return new_string.substring(0, 35);
        } else {
            return new_string;
        }
    }


    toNumberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

}


export default Helper;