import axios from "axios"  //datalara ulaşabilmek için axios kütüphanesini projemize dahil ettik.

const getDate = (async(number) => { // async asenkron anlamındadır ve asenkron ifadeler await ile birlikte kullanılır await'i axios'un önüne koymasaydık beklemezdi bir sonraki satıra geçerdi yani bilgiler sıralı bir şekilde gelmezdi.
    const {data:users} = await axios (`https://jsonplaceholder.typicode.com/users/${number}`)
//  İsteği yaparken aşağıdaki endpointin sonundaki rakamı parametrede gelen user id'ile değiştirmeniz gerekiyor dediği için back-tick içinde ${number} ifadesini ekledik.
    const {data:posts} = await axios (`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
    return {"users": users, "posts:": posts}
})

export default getDate  // default "varsayılan" olarak bir javascript verisi nasıl dışarı aktarılır onu yazdık export default getData diyerek.

//node_modules dosyasının gözükmemesi için .gitignore dosyasını oluşturup "/node_modules" ekledik.