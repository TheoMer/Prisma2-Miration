import { objectType } from '@nexus/schema';

export const Item = objectType({
    name: 'Item',
    definition(t) {
      t.model.id()
      t.model.title()
      t.model.description()
      t.model.mainDescription()
      t.model.image()
      t.model.largeImage()
      t.model.image2()
      t.model.largeImage2()
      t.model.image3()
      t.model.largeImage3()
      t.model.image4()
      t.model.largeImage4()
      t.model.image5()
      t.model.largeImage5()
      t.model.image6()
      t.model.largeImage6()
      t.model.price()
      t.model.quantity()
      t.model.user()
      t.model.User()
      t.model.userIdentity()
      t.model.cartitems({
        filtering: true,
        ordering: true,
      })
      t.model.itemvariants({
        filtering: true,
        ordering: true,
      })
      t.model.size()
      t.model.Size()
      t.model.color()
      t.model.Color()
      t.date("createdAt")
      t.date("updatedAt")
    },
})