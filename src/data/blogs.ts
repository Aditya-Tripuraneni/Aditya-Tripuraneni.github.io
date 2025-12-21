export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  preview: string;
  content: string;
  tags: string[];
  category: 'food-blogs' | 'things-interesting';
  images?: string[];
  rating?: string;
  location?: string;
}

export const blogPosts: BlogPost[] = [
  // Food Blogs
  {
    slug: 'xuan-bakery',
    title: 'Xuan Bakery',
    date: '2025-12-20',
    preview: 'A Chinese bakery. Tasty pastries with great prices.',
    images: [
      '/images/blog/food/2025-12-20/xuan-bakery-1-dec-20-2025.jpeg',
      '/images/blog/food/2025-12-20/xuan-bakery-2-dec-20-2025.jpeg',
      '/images/blog/food/2025-12-20/xuan-bakery-3-dec-20-2025.jpeg'
    ],
    rating: '9/10',
    location: '325 Bamburgh Cir Unit A110, Scarborough, ON M1W 3Y1',
    content: `
## Rating: 9/10

This is the first time I have tried Xuan Bakery and I will say I am very impressed. 
As usual I went with my friend to try this spot. In fact we tried this spot the same day we tried HOJA mi-sua and KS BBQ & Noodles House which are 2 other blogs I wrote about.

## The Food

I got their egg tart, custard fried bun and their classic pineapple bun. I only got pictures of the custard fried bun and pineapple bun because the egg tart was gone before I could take a picture lol.

The custard fried bun was actually really soft and light on the stomach. 

They had light powdered sugar on the outside of the bun and that was also a really nice complement to the custard inside. The custard tasted very similar to vanilla even though it looked orange like mango. 

## The Atmosphere

It's a small bakery with like 3 spots to sit down. But the focus is just good food. They also have nice sample treats for you to try that are free of charge. When I went they had this bread that had cream on it which was really soft and sweet. 

## The Cost

For a bakery this was a very cheap local bakery.
The prices are incredibly reasonable for the quality you get. 

The egg tart was $2 per piece, the custard fried bun was $2.50 and the pineapple bun was $2.50 as well.

## The Service

Quick and efficient. Everything is already freshly baked so you are not waiting for a long time to get your food.

## Would I Go Back?

Absolutely. Xuan Bakery has become a go to spot for me when I'm craving baked goods. 

I am lowkey addicted to their custard fried bun now.

**What to Order:** The custard fried bun is a must try. Also their egg tarts are really good too.

**Best Time to Go:** Morning for the freshest selection of pastries.
    `,
    tags: ['Chinese', 'Bakery', 'Scarborough', '9/10'],
    category: 'food-blogs'
  },
  {
    slug: 'HOJA mi-sua',
    title: 'HOJA mi-sua',
    date: '2025-12-20',
    preview: 'Solid Taiwanese spot with excellent rice and meat dishes.',
    images: [
      '/images/blog/food/2025-12-20/hoja-dec-20-2025.jpeg',
      '/images/blog/food/2025-12-20/hoja-dec-1-20-2025.jpeg'
    ],
    rating: '8.5/10',
    location: '3235 Hwy 7 #27, Markham, ON L3R 3P9',
    content: `
## Rating: 8.5/10

I came across this Taiwanese spot on Instagram reels so I had to give it a try. I actually went here with one of my friends. To be honest, the majority of these blog posts are with my friends. Anyways if you're craving some authentic Taiwanese comfort food, I must say this place is it.

## The Food

I got their braised pork belly with rice and sausage. It came with a yellow vegetable side which I am honestly not sure what it was. And the rice had green onions as well. 

The portion sizes are not crazy big but they are decent enough to fill you up. I eat a lot and I was full after 1 small bowl.

My friend got their chicken and rice dish which was also really good. I had a bite of the chicken and it was not dry or too crunchy. It was the perfect mix of crunchiness and softness. 

I think a really nice touch to this place is they have chilli oil on the side along with some buttery garlic which is all in a small container and you can add as much as you want.
Adding the chilli oil and the buttery garlic made the rice taste so good. It already tasted good on its own but adding those 2 condiments really made it next level.

## The Atmosphere

It is a small restaurant that is very casual. I always look at how clean a restaurant is before I eat there and this place was very clean, including the washroom!

I would say this place is really great vibes if you come here when it's raining outside or when it's gloomy and dark outside. Also it's really nice hot food to have in the winter!

## The Cost

Prices are reasonable for what you get. Not the cheapest option out there, but the portions are good and the quality justifies the cost. Expect to spend around $15 to $20 per person for a filling meal.

It is also worth noting that you pay online at the table! They have this cart option that you can check out the items you bought and just pay online which is convenient if you don't want to wait in line.

## The Service

The food came pretty quickly! Staff was also very polite and friendly.

## Would I Go Back?

Yes, but maybe not as my first choice. Here's the thing. The food is good, genuinely good. But it's missing that extra something that would make it a 9/10. Maybe it's the atmosphere, maybe I just haven't found their best dish yet.

The braised pork rice is worth going back for though. That alone is reason enough to return.

**What to Order:** The braised pork rice with red sausage is a must. Their chicken dishes are solid too.

**Best Time to Go:** Weekday lunch to avoid the crowds.
    `,
    tags: ['Taiwanese', 'Rice Dishes', 'Toronto', '8.5/10'],
    category: 'food-blogs'
  },
  {
    slug: 'ks-bbq-noodles-house',
    title: 'KS BBQ & Noodles House',
    date: '2025-12-20',
    preview: 'Another solid BBQ spot that nails the fundamentals. Great flavors, generous portions, and prices that won\'t break the bank.',
    images: [
      '/images/blog/food/2025-12-20/kss-bbq-1-dec-20-2025.jpeg',
      '/images/blog/food/2025-12-20/kss-bbq-2-dec-20-2025.jpeg'
    ],
    rating: '9/10',
    location: '3255 Hwy 7 #258fc, Markham, ON L3R 3P9',
    content: `
## Rating: 9/10

If you saw my very first food blog, you'd know I then visited their neighbour spot Excellent B.B.Q House.

After trying that place, I was curious to see how KS BBQ & Noodles House compared.

KS BBQ & Noodles House did not disappoint. Very similar to the Excellent B.B.Q House.

## The Food

I got their 3 meat on rice combo with pork broth which is the same thing I got at Excellent B.B.Q House for comparison.

BUT! Instead of getting roasted pork, I got their chicken. 

Let me first start off with the chicken because I am always very picky about dry chicken. This was genuinely the most moist tender chicken I have ever had. Like not even joking (maybe I should try other things lol).
They gave a side dish of garlic, green onion mixed with some other spices that you should have when you eat the chicken too because it takes the flavour to a whole other world. 
Also from an aesthetic standpoint their chicken looks golden which is quite visually appealing. 

Now on to the duck and bbq pork. 

Honestly, they were really similar in taste when comparing to Excellent B.B.Q House. The duck was very tender and juicy and the bbq pork was nice and fatty with crunch.

## The Atmosphere

You can see the meats hanging in the window, which is always a good sign. The place is clean and functional. You're here for the food, and they know it.

It gets busy during lunch rush, so expect to wait a bit if you come at peak times. But the turnover is fast.

I came here on a Saturday around 2pm which was peak activity so I did have to wait a bit.

## The Cost

KS BBQ & Noodles House has very cheap prices for their food and it's quite similar to Excellent B.B.Q House.
I spent around $12 for my meal, which came with 3 meats, rice, cabbage, and a soup. That is a really good deal in my honest opinion.

## The Service

Quick and efficient. 

No time for small chat lol, but they are really kind and get your order right.

## Would I Go Back?

Absolutely. KS BBQ & Noodles House does what it does really well. The BBQ is on point and the prices are right. 

It's the kind of place I'd recommend to anyone looking for solid Chinese BBQ.

I would also say that this place ties with Excellent B.B.Q House for my favourite Chinese BBQ spot in the area.

**What to Order:** The three meat combo over rice.

**Best Time to Go:** Early lunch (11:30am) to beat the rush and get the freshest cuts.
    `,
    tags: ['Chinese BBQ', 'Noodles', 'Markham', '9/10'],
    category: 'food-blogs'
  },
  {
    slug: 'excellent-bbq-house-first-markham',
    title: 'Excellent B.B.Q House - First Markham Place',
    date: '2025-11-22',
    preview: 'Found this Chinese BBQ spot at First Markham Place and it absolutely lived up to its name. 9/10 would (and will) go back.',
    images: [
      '/images/blog/food/2025-11-22/excellent-bbq-house-nov22.jpg',
      '/images/blog/food/2025-11-22/excellent-bbq-house-food-nov22.jpg'
    ],
    rating: '9/10',
    location: '3255 Hwy 7, Markham, ON L3R 3P9',
    content: `
## Rating: 9/10

Found this spot tucked into First Markham Place, and honestly, the name doesn't lie. This place is fire.

## The Food

The BBQ here is seriously good. 

I ordered their 3 meat special and I got Roasted Duck, Char Siu, and Roasted Pork Belly. 
The Duck and Char Siu were probably my favourite ones out of the 2 meats becuase of how fatty they were. If you like crunchy crispy pieces, their pork belly is just that. 

With the meats, comes some rice and some soup and vegetables as well. 

The best part is this was all $10.95 which is insanely cheap for the quality and quantity you're getting.

## The Atmosphere

The place itself is very busy and I can see why. This place seems to be very popular so if you do plan on going I recommend you go before 5pm if possible if on a weekday. 
They also only take cash which is another thing to note :) 

You can sit down in the food court and there are a bunch of tables to enjoy the food plus there are plenty of small shops you can check out after. \n

There is a surprisingly good bubble tea spot with fresh fruit near by as well. \n

I am not even a fan of bubble tea but when I got here I always go get the bubble tea too lol.

The kitchen is visible from the front, so you can see all the meats hanging and being prepped. 


## The Service

Staff here are efficient and friendly. They're busy so it's not like you're getting a full conversation, but they're helpful, they get your order right, and they're quick. That's really all you need.


## Would I Go Back?

Yes. 

The only reason it's not a 10/10 is because nothing's perfect, but this is about as close as you get for Chinese BBQ in the area. If you're at First Markham Place or anywhere nearby, definitely check it out.

**What to Order:** The triple meat combo. 

**Best Time to Go:** Lunch or early dinner gets busy but that's when everything is freshest.
    `,
    tags: ['Chinese BBQ', 'First Markham Place', 'Markham', '9/10'],
    category: 'food-blogs'
  },

  // Things Interesting
  {
    slug: 'attention-is-all-you-need',
    title: 'Attention is All You Need',
    date: '2025-07-06',
    preview: 'I finally decided to read the paper "Attention is All You Need". I can\'t lie after taking 4ML3 from McMaster this paper was pretty interesting exploring new concepts of Machine Learning.',
    content: `
## The Big Idea

Before transformers, everyone was obsessed with CNNs and RNNs for sequence tasks. CNNs are great for images because they look at local patterns. Like edges and textures and then build up to understand the whole picture. But they process everything in this fixed, rigid way. They look at nearby stuff really well, but understanding long distance relationships? (Do you get the pun) They are quite bad.

The transformer paper basically said "what if we just let the model look at everything all at once?" Instead of processing things step by step or in fixed windows like the kernels we see in CNN's, every part of the input can directly look at every other part and decide what's important.

## Why It's Better Than CNNs for Sequences

CNNs were actually pretty decent for sequence tasks for a while. They're fast, they parallelize well, and they're good at finding patterns. But they only look at local neighborhoods. To understand something far away in a sequence, you need to stack a bunch of layers, and even then, it's like playing telephone. Information degrades.

Transformers skip all that. Through self attention, position 1 can directly talk to position 1000. One big group chat where everyone can talk to each other. 

## The Self-Attention Magic

The attention mechanism is surprisingly elegant. Each word (or token) creates three vectors: query, key, and value. Then it's basically asking "hey, which other words should I pay attention to?" by comparing its query with everyone else's keys. The ones that match well get more attention, and you use that to create a weighted sum of values.

What's clever is that this happens in parallel for everything. Unlike RNNs that have to process one word at a time, transformers can process the entire sequence simultaneously. That's a massive speed boost.

## Real-World Impact

The architecutre is pretty muche everywhere now. Yes ChatGPT and the big models. 

But it's not just NLP anymore. Which I used to think it was. People use transformers for images (Vision Transformers) too.

## The Trade-offs

Not everything is perfect though. Transformers are computationally expensive. They also need a lot of data to train properly.


## Why I Actually Care About This Paper

To be honest, this is the first research paper I've actually sat down and properly digested. I've skimmed through plenty before, but this one felt important enough to really understand and it was worth it.

If you're into ML at all, it's definitely worth reading the original paper. It's surprisingly readable for a research paper, and understanding transformers is basically essential knowledge at this point.
    `,
    tags: ['Machine Learning', 'Transformers', 'Research Paper', 'AI'],
    category: 'things-interesting'
  },
  {
    slug: 'persona-vectors-meeting-in-a-park',
    title: 'Persona Vectors - Meeting in a Park',
    date: '2025-07-14',
    preview: 'So there\'s this thing called "Papers in the Park" started by an ex-RBC AI engineer, and it\'s exactly what it sounds like. Students meet up in a park and read research papers together',
    content: `
## The Core Idea

The paper explores how large language models encode different personas and behaviors internally. Essentially, when you prompt an LLM to "act like a pirate" or "respond like a formal business professional," the model isn't just generating different words  it's actually activating different internal representations.

The researchers found that these personas exist as vectors in the model's latent space. You can think of it like different directions the model can move in to adopt different personalities or speaking styles.

## Why This Matters

What's cool is that these persona vectors are composable. You can combine them, subtract them, or interpolate between them to create new behaviors. I do find it weird that you can mathematically interact with these personalities and just add and subtract them. 

This has practical implications for how we steer and control AI systems. Instead of carefully crafting prompts and hoping for the best, we could potentially navigate this persona space more directly.

## Why I like Papers in the Park 

Papers in the Park is casual enough that you're not afraid to ask "dumb" questions, but focused enough that you actually learn something. Way better than reading papers alone in your room. Cuz I spent way too long trying to understand "Attention is All You Need". 

It's nice to be able to talk to others about those papers and learn quicker. Best part was literally anyone could go, you don't even need to be in STEM.


## My Thoughts

I think more people should do this kind of thing. Academic papers can be intimidating but when you're sitting in a park or a group of other students just trying to figure things out together it becomes way more approachable.

Plus you get to touch grass while learning about AI.
    `,
    tags: ['AI', 'LLMs', 'Research Paper', 'Community'],
    category: 'things-interesting'
  }
];

export const getFoodBlogs = (): BlogPost[] => {
  return blogPosts
    .filter(post => post.category === 'food-blogs')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getThingsInteresting = (): BlogPost[] => {
  return blogPosts
    .filter(post => post.category === 'things-interesting')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
