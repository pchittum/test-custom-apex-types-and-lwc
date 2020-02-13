public with sharing class ApexTypeSimpleExample {

    @AuraEnabled(cacheable=true)
    public static string apexTypePassThrough(SimpleWrapper input){
        System.debug(input);

        return String.format('{0}, {1}, {2}', new List<String>{input.str1, input.str2, input.str3});
    }
}
