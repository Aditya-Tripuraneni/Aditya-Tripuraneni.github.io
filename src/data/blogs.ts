export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  preview: string;
  content: string;
  tags: string[];
  category: 'food-blogs' | 'things-interesting';
}

export const blogPosts: BlogPost[] = [
  // Things Interesting
  {
    id: '1',
    slug: 'attention-is-all-you-need',
    title: 'Attention is All You Need',
    date: '2025-07-06',
    preview: 'I finally decided to read the paper "Attention is All You Need". I can\'t lie after taking 4ML3 from McMaster this paper was pretty interesting exploring new concepts of Machine Learning...',
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
    id: '2',
    slug: 'persona-vectors-meeting-in-a-park',
    title: 'Persona Vectors - Meeting in a Park',
    date: '2025-07-14',
    preview: 'So there\'s this thing called "Papers in the Park" started by an ex-RBC AI engineer, and it\'s exactly what it sounds like. Students meet up in a park and read research papers together...',
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
