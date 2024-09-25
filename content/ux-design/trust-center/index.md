---
title: "Trust Center"
draft: false
date: 2022-12-01
description: "Designed a zero-to-one security questionnaire management tool and WYSIWYG security posture companion site to expanded our security compliance platform"
cover: "cover.jpg"
role: "Product Designer"
company: "Secureframe"
---
{{< img-full-width src="1.png">}}

###### What the company does
[Secureframe](https://secureframe.com/) helps streamline compliance efforts across different compliance frameworks including SOC 2, ISO 27001, and HIPAA.

###### Background
We noticed that we were losing quite a few deals to our competition because we didn't offer any type of way for our customers to publicly display their compliance stance. So, in order to stay competitive in the space, we needed to build a trust center offering.

###### My role & work
Sole designer, working on requirements, doing discovery, delivering designs, and working with engineers to implement design

###### Teammates
1 PM, 4 engineers, 1 PMM

###### Project timeline
~5 months from idea to release

{{< full-width-post >}}

## Understanding the why and what
We noticed that we kept losing deals to our competitors when it was down to us and another compliance platform. We dug in and noticed that a key feature that we were missing and that our competition had was a way for our customers to publish their compliance achievements and stance—a.k.a. a trust center. One of our very direct competitors, [Vanta](https://www.vanta.com/), even purchased a fairly prominent player in the space, [Trustpage](https://trustpage.com/), while we were building an offering of our own. This was a pretty strong signal that our competition was investing in this product feature and validated our efforts in building it out ourselves.

![Competition](2.jpg)

## The pieces of the puzzle
In order for this product to be successful, we needed to make sure we had all these pieces, even for our MVP release:
1. Admin for our customers to manage their trust center design and document requests
2. Publicly accessible trust center page
3. Ability to request documents on the public trust center

![3 pieces](3.jpg)

## Competition and considerations
In our competitive research, we noticed that even though some of our competition did allow for some customization of their trust center pages, our customers and even their customers were wanting a more cohesive experience between their marketing pages and this hosted trust center. We thought that this could be a differentiating feature of ours when going head to head with our competition.

![Competition](4.jpg)

## Design & ideation
The design for the public-facing trust center as well as the site designer had the most design explorations. The biggest decisions I had for the admin side was how to organize the site designer and where to put the section where they could adjust what content from their Secureframe monitoring section flowed through to their public facing page.

### Public trust center
The major considerations on the public trust center included
- Should we go with single page vs tabbed or multi-page?
- How much customization is enough to help us standout amongst the competition?
- How much customization around order and content should we allow in our MVP?
- If designers aren't the ones customizing this page, how can we make it accessible for everyone to make a quality-looking page?

![Site Options](5.jpg)

Ultimately, we went with a simple and standard single page design that allowed for just enough customization to where our customers could have a similar look and feel to their main marketing page.

#### The customizations included:
- Colors: background, text (dividers and borders inherited), button and primary brand color
- Graphics: logo to sit in the header and single image that sits in the fixed hero section
- Reordering: All sections in between the hero section and the footer were reorder-able
- Show/Hide: Sections only showed if there was any content in them, otherwise they were hidden and didn't have a link in the top nav

![TC Final MVP](6.jpg)

#### Details and request drawer
We needed a way to reveal more information, specifically in the monitoring section, and also a way to handle a request for doc flow. A drawer seemed to be the simplest on this single page site.

![](7.jpg)
![](8.jpg)

### Site designer
My goal with the site designer was to be the simplest and accessible. The idea was that each section was hover-able, and hovering would expose further actions to customize the section like text copy, content, and order (within the section as well as moving the whole section itself).

![](9.jpg)
![](10.jpg)
![](11.jpg)
![](12.jpg)

### Document requests
There are two sides to the document requests: the request flow and the approval flow. We initially went down a path of requiring authentication to make requests and access requested docs but quickly realized that there was a lot more overhead and dev cost. We found a way to leverage tokenized url's to manage access (as well as NDA's which is a whole other article in and of itself so I will spare you the details here).

#### Document request flow from public trust center
![Document request flow](14.jpg)

#### Request management in admin
This is the first page of the Trust Center admin as well as the most visited page after initial setup.
![Manage requests admin](13.jpg)

### More admin
Instead of managing all of the monitoring section inside the designer, I opted to put these settings in the non-designer admin. Here, customers can customize what compliance measures flow through to the public trust center. Due to the nature of our automated tests in our platform, we needing to have some safe guards in place to protect our customers from unintended issues with displaying their compliance stance. You can see some of these controls below.
![Manage Monitoring](15.jpg)

In addition to managing requests and the display of the monitoring data, we also needed a way to manage the published state of the trust center, customize the URL and favicon, as well as input privacy policy and terms of service so our customers' trust center visitors could view these without having to navigate back to their marketing site.
![Settings](16.jpg)

## Release and Conclusion
Upon beta release, we had 4 existing customers who were interested in trying this product. They all adopted it without a hiccup and were very pleased with the product. General access was opened up 2 weeks later and we were starting to win more sales with this! We have plans to further improve and build on this MVP. One thing we will have to keep in mind is how far we take it. We could go all the way to a WYSIWYG website builder but I think there will be diminishing returns before then. Finding that line in the sand will be the next major decision point for us.

{{< /full-width-post >}}