
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('garden').del()
    .then(function () {
      // Inserts seed entries
      return knex('garden').insert([
        {
          id: 1,
          name: "Creeping Phlox",
          description: "Creeping phlox (Phlox subulata) produces a colorful spring carpet of soft pastel hues. Little expert knowledge is needed on how to plant and care for creeping phlox. Growing creeping phlox over a rockery or in tough soil conditions provides a nearly carefree ground cover or cascading plant. Consider growing it in between pavers, in a planter or just as a part of a bright spring bed as well.",
          careOfPlant: "Little special care or maintenance is necessary when growing creeping phlox. The plant benefits from an early spring application of fertilizer to encourage new growth and flowering. Even established plants should have supplemental watering in hot summer periods and plants along rockeries may show signs of scorching due to the hot surroundings. The stems can be cut back after flowering to promote a second bloom. Care of creeping phlox may also include cutting the plant back in late winter to allow for rejuvenation and to produce young, more compact stems",
         imgUrl: "https://cdn.webvanta.com/000000/51/74/slider_detail/uploads/guide/1513099230-5f3d51267b82f69a1/39614267_mOptimized.jpg"
          },
  
          {
          id: 2,
          name: "Dianthus",
          description: "Dianthus flowers (Dianthus spp.) are also called “pinks.” They belong to a family of plants which includes carnations and are characterized by the spicy fragrance the blooms emit. Dianthus plants may be found as a hardy annual, biennial or perennial and most often used in borders or potted displays. A quick tutorial on how to grow dianthus reveals the ease of care and versatility of this attractive flowering plant.",
          careOfPlant: "Instructions on how to care for dianthus are very straightforward. Water the plants when dry and apply fertilizer every six to eight weeks. You may also work a slow-release fertilizer into the soil at planting, which will release you from the need to feed the plants.",
         imgUrl: "https://images.meredith.com/content/dam/bhg/Images/life-in-color/sweet%20william.jpg.rendition.largest.jpg"
          },
          {
          id: 3,
          name: "Creeping Thyme",
          description: "Thymus praecox is a low growing perennial hardy in zones 4-9 with fairly minimal requirements. An evergreen with lightly haired foliage, this tiny-growing creeping thyme varietal — rarely over 3 inches — will appear in low, dense mats, which sprawl randomly and quickly fill in areas as a ground cover. T. serpyllum is another creeping thyme variety.",
          careOfPlant: "Growing creeping thyme is a simple process due to its compatibility in a variety of soils and light exposures. Although this ground cover prefers well-drained lightly textured soils, it will grow quite well in less than desirable medium and thrive from sun to light shade environments",
         imgUrl: "https://maxpull-tlu7l6lqiu.stackpathdns.com/wp-content/uploads/2013/05/creeping-thyme-400x359.jpg"
          },
          {
          id: 4,
          name: "Bee Balm",
          description: "The bee balm plant is a North American native, thriving in woodland areas. Also known by its botanical name of Monarda, bee balm is very attractive to bees, butterflies and hummingbirds. The bee balm flower has an open, daisy-like shape, with tubular petals in shades of red, pink, purple and white. Bee balm plants are perennial, coming back year after year to add cheerful color to your garden.",
          careOfPlant: "Growing bee balms is fairly easy as long as you keep the soil moist. Provide a good, multi-purpose fertilizer, and work it into the soil around the bee balm plant.",
         imgUrl: "https://maxpull-tlu7l6lqiu.stackpathdns.com/wp-content/uploads/2012/03/purple-bee-balm-400x266.jpg"        
      },
      {
          id: 5, 
          name: "Delphinium",
          description: "Delphinium flowers beautify the summer garden with showy, spiky blooms on a tall, sometimes towering stem. Delphiniums come in a range of shades. Many gardeners wonder how to grow delphinium and some avoid planting them after hearing that the plant is difficult to grow. What are the secrets to the correct care of delphinium?",
          careOfPlant: "An important aspect of caring for the thought to be difficult delphinium is deadheading the first blooms in early summer. Remove flower stalks when blooms are spent. When all blooms are removed and moisture and fertilization requirements are met, the gardener can expect a bountiful blast of blooms in late summer or early autumn. This is when delphinium flowers are at their most beautiful. Often, this may be the final show for the short-lived perennial, but the striking beauty and long lasting blooms are worth the effort.",
         imgUrl: "https://maxpull-tlu7l6lqiu.stackpathdns.com/wp-content/uploads/2013/09/Delphinium-400x600.jpg"
      },
      {
          id: 6,
          name: "Lavender",
          description: "Lavender (Lavandula angustifolia) is a commonly grown herb plant popular for its fragrant aroma. This easy-care plant enjoys hot, dry conditions, making it suitable for use in a variety of landscape settings and an excellent candidate for areas prone to drought. Keep reading to learn more about lavender plant care.",
          careOfPlant: "Once established, lavender plants require little care or maintenance. While they should be watered regularly early on, established plants need little water, as they are extremely drought tolerant. Regular pruning not only keeps lavender plants neat looking in appearance, but also helps to encourage new growth. Low-growing varieties can be cut back to the new growth while larger types can be pruned to about a third of their overall height.",
         imgUrl: "https://maxpull-tlu7l6lqiu.stackpathdns.com/wp-content/uploads/2008/12/lavender-herb-400x267.jpg"
      }
      ])
    })
    .then(() => {
      return knex.raw("SELECT setval('garden_id_seq', (SELECT MAX(id) FROM garden))")
    })
}
