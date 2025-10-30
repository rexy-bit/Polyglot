interface WhyType{
    icon : string;
    title : string;
    description : string;

}

export interface Faq{
    question  : string;
    answer : string;
}

export interface Testimonials{
    name : string;
    testimonial : string;
}
export interface Program{

    code : number;
    name : string;
    level : string;
    shortDescrition : string;
    longDescription : string;
    attractiveText : string;
    duration : string;
    type : string;
    students : number;
    purchasePrice : number;
    why : WhyType[];
    faq : Faq[];
    testomonials : Testimonials[];

     
}