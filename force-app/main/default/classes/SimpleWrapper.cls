public class SimpleWrapper {
    @AuraEnabled public String str1 { get; set; } // this works
    @AuraEnabled public String str2, str3; // this and the following are created as null
}
