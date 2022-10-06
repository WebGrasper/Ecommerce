
class ApiFeature {
    constructor(query, querystr) {
        this.query = query;
        this.querystr = querystr;
    }
    search() {

        //Here we are searching product according to what user is given through search bar.
        const keyword = this.querystr.keyword ? {
            name: {
                $regex: this.querystr.keyword,
                $options: "i",
            }
        } : {};
        // console.log(keyword);

        //assigning back keyword object
        this.query = this.query.find({ ...keyword });
        //Returning whole search function.
        return this;
    }
    filter() {
        const queryCopy = { ...this.querystr }
        // console.log(queryCopy);
        //Removing some fields for category
        //Here all other fields will stay except (keyword, page and limit),because we don't have need to use all three.
        const removeFields = ["keyword", "page", "limit"];
        removeFields.forEach(key => delete queryCopy[key]);
        // console.log(queryCopy);

        //Filter for price and rating.
        let querystr = JSON.stringify(queryCopy);
        //Using regular expression and converting Normal string into  ($) sign string only for Price. 
        querystr = querystr.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`);

        this.query = this.query.find(JSON.parse(querystr));
        // console.log(querystr);
        //Returning whole filter function.
        return this;
    }
    pagination(resultPerPage){
        //Setting up current page value. It will be 1 or another page number(i.e., 2,3,4,5...n ).
        const currentPage = Number(this.querystr.page) || 1;

        //Making skip functionality for every page (means slicing products as index number).
        const skip = resultPerPage * (currentPage - 1);

        //Limit and skip both are functions in which we are passing two constants resultPerPage and skip.
        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;



    }
};

module.exports = ApiFeature;