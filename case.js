// SQL ile istediklerinizi javascript ile yazın derken muhtemelen orm kütüphanesi vs. kullanarak yazın demek istediniz
// bunu nasıl yapacağımı şimdilik bilmediğimden boş görünmesin diye json yazdım :/

const category = [
  {
    "cat_id": 1,
    "cat_name": "Kategori1"
  },
  {
    "cat_id": 2,
    "cat_name": "Kategori2"
  }
]

const product = [
  {
    "prod_id": 1,
    "prod_name": "Product1"
  },
  {
    "prod_id": 2,
    "prod_name": "Product2"
  }
]

// 2 yetki fonksiyonu

const user = {
  "permission_level": 0 
}

const moderator = {
  "permission_level": 1 
}

const admin = {
  "permission_level": 2 
}

function APIPermissionCheck(user) {

  const user_response = {
    "body": "access denied",
    "limit": 0
  }

  const moderator_response = {
    "body": "random data",
    "limit": 100
  }

  const admin_response = {
    "body": "random data",
    "limit": 99999
  }
  
  switch (user["permission_level"]) {
    case 0:
      console.log("Users are not allowed to access this API");
      return user_response;
    case 1:
      console.log("Warning: moderators have limited access to this API");
      return moderator_response;
    case 2:
      console.log("Admin access granted");
      return admin_response;
  }
}

