import { config, fields, singleton } from "@keystatic/core";

// ── Reusable field patterns ─────────────────────────────────────────────────

function cardField(label: string) {
  return fields.array(
    fields.object({
      icon: fields.text({ label: "Icon (Lucide name)" }),
      title: fields.text({ label: "Title", validation: { isRequired: true } }),
      description: fields.text({ label: "Description", multiline: true }),
    }),
    { label, itemLabel: (props) => props.fields.title.value },
  );
}

function faqField() {
  return fields.object({
    headline: fields.text({ label: "Headline" }),
    items: fields.array(
      fields.object({
        id: fields.text({ label: "ID" }),
        question: fields.text({
          label: "Question",
          multiline: true,
          validation: { isRequired: true },
        }),
        answer: fields.text({
          label: "Answer",
          multiline: true,
          validation: { isRequired: true },
        }),
      }),
      { label: "FAQ Items", itemLabel: (props) => props.fields.question.value },
    ),
  });
}

function ctaField(label: string) {
  return fields.object({
    label: fields.text({ label: "Button Label" }),
    href: fields.text({ label: "Link (optional)" }),
  });
}

function linkArrayField(label: string) {
  return fields.array(
    fields.object({
      label: fields.text({ label: "Label", validation: { isRequired: true } }),
      href: fields.text({ label: "URL", validation: { isRequired: true } }),
    }),
    { label, itemLabel: (props) => props.fields.label.value },
  );
}

function statField() {
  return fields.object({
    value: fields.text({ label: "Value", validation: { isRequired: true } }),
    label: fields.text({ label: "Label", validation: { isRequired: true } }),
  });
}

// ── Config ──────────────────────────────────────────────────────────────────

export default config({
  storage: { kind: "local" },
  singletons: {
    // ── Homepage ────────────────────────────────────────────────────────────
    homepage: singleton({
      label: "Homepage",
      path: "src/content/data/homepage",
      format: { data: "json" },
      schema: {
        nav: fields.object({
          links: linkArrayField("Nav Links"),
          cta: fields.text({ label: "Nav CTA" }),
        }),

        hero: fields.object({
          eyebrow: fields.text({ label: "Eyebrow" }),
          headline: fields.text({ label: "Headline", multiline: true }),
          subheadline: fields.text({ label: "Subheadline", multiline: true }),
          primaryCta: fields.text({ label: "Primary CTA" }),
          secondaryCta: fields.text({ label: "Secondary CTA" }),
          proofLine: fields.text({ label: "Proof Line" }),
          layers: fields.object({
            bottom: fields.object({
              label: fields.text({ label: "Label" }),
              tools: fields.array(fields.text({ label: "Tool" }), { label: "Tools" }),
            }),
            middle: fields.object({
              label: fields.text({ label: "Label" }),
            }),
            top: fields.object({
              label: fields.text({ label: "Label" }),
              items: fields.array(fields.text({ label: "Item" }), { label: "Items" }),
            }),
          }),
        }),

        logoStrip: fields.object({
          label: fields.text({ label: "Section Label" }),
          row1: fields.array(fields.text({ label: "Tool" }), { label: "Row 1" }),
          row2: fields.array(fields.text({ label: "Tool" }), { label: "Row 2" }),
        }),

        painPoints: fields.object({
          headline: fields.text({ label: "Headline", multiline: true }),
          subheadline: fields.text({ label: "Subheadline", multiline: true }),
          cards: cardField("Pain Point Cards"),
        }),

        positioning: fields.object({
          headline: fields.text({ label: "Headline", multiline: true }),
          cards: fields.array(
            fields.object({
              type: fields.select({
                label: "Type",
                options: [
                  { label: "Negative", value: "negative" },
                  { label: "Positive", value: "positive" },
                ],
                defaultValue: "negative",
              }),
              title: fields.text({ label: "Title", validation: { isRequired: true } }),
              description: fields.text({ label: "Description", multiline: true }),
            }),
            { label: "Cards", itemLabel: (props) => props.fields.title.value },
          ),
          callout: fields.text({ label: "Callout", multiline: true }),
        }),

        howItWorks: fields.object({
          headline: fields.text({ label: "Headline" }),
          steps: fields.array(
            fields.object({
              number: fields.text({ label: "Number" }),
              title: fields.text({ label: "Title", validation: { isRequired: true } }),
              description: fields.text({ label: "Description", multiline: true }),
            }),
            { label: "Steps", itemLabel: (props) => props.fields.title.value },
          ),
        }),

        originStory: fields.object({
          headline: fields.text({ label: "Headline" }),
          paragraphs: fields.array(
            fields.text({ label: "Paragraph", multiline: true }),
            { label: "Paragraphs" },
          ),
          timeline: fields.array(
            fields.object({
              year: fields.text({ label: "Year" }),
              event: fields.text({ label: "Event" }),
            }),
            { label: "Timeline", itemLabel: (props) => props.fields.year.value },
          ),
        }),

        automationShowcase: fields.object({
          headline: fields.text({ label: "Headline" }),
          subheadline: fields.text({ label: "Subheadline" }),
          categories: fields.array(
            fields.text({ label: "Category" }),
            { label: "Filter Categories" },
          ),
          cards: fields.array(
            fields.object({
              name: fields.text({ label: "Name", validation: { isRequired: true } }),
              category: fields.text({ label: "Category" }),
              description: fields.text({ label: "Description", multiline: true }),
              hoursSaved: fields.text({ label: "Hours Saved" }),
              tags: fields.array(fields.text({ label: "Tag" }), { label: "Tags" }),
            }),
            { label: "Automation Cards", itemLabel: (props) => props.fields.name.value },
          ),
          summaryBar: fields.object({
            items: fields.array(
              fields.object({
                label: fields.text({ label: "Label" }),
                value: fields.text({ label: "Value" }),
              }),
              { label: "Summary Items", itemLabel: (props) => props.fields.label.value },
            ),
            total: fields.text({ label: "Total" }),
          }),
        }),

        dataLayer: fields.object({
          headline: fields.text({ label: "Headline" }),
          subheadline: fields.text({ label: "Subheadline" }),
          paragraphs: fields.array(
            fields.text({ label: "Paragraph", multiline: true }),
            { label: "Paragraphs" },
          ),
          pullQuote: fields.text({ label: "Pull Quote", multiline: true }),
          stats: fields.array(
            statField(),
            { label: "Stats", itemLabel: (props) => props.fields.label.value },
          ),
          inputs: fields.array(fields.text({ label: "Input" }), { label: "Inputs" }),
          outputs: fields.array(fields.text({ label: "Output" }), { label: "Outputs" }),
        }),

        stats: fields.object({
          headline: fields.text({ label: "Headline" }),
          subheadline: fields.text({ label: "Subheadline" }),
          items: fields.array(
            fields.object({
              value: fields.number({ label: "Value", validation: { isRequired: true } }),
              suffix: fields.text({ label: "Suffix (e.g. +, %)" }),
              prefix: fields.text({ label: "Prefix (e.g. ~)" }),
              label: fields.text({ label: "Label", validation: { isRequired: true } }),
              color: fields.text({ label: "Color" }),
            }),
            { label: "Stat Items", itemLabel: (props) => props.fields.label.value },
          ),
        }),

        pricing: fields.object({
          headline: fields.text({ label: "Headline" }),
          subheadline: fields.text({ label: "Subheadline" }),
          tiers: fields.array(
            fields.object({
              name: fields.text({ label: "Tier Name", validation: { isRequired: true } }),
              hours: fields.text({ label: "Hours" }),
              price: fields.text({ label: "Price" }),
              unit: fields.text({ label: "Unit" }),
              minimum: fields.text({ label: "Minimum" }),
              description: fields.text({ label: "Description" }),
              features: fields.array(fields.text({ label: "Feature" }), { label: "Features" }),
              cta: fields.text({ label: "CTA" }),
              highlighted: fields.checkbox({ label: "Highlighted" }),
              badge: fields.text({ label: "Badge" }),
            }),
            { label: "Pricing Tiers", itemLabel: (props) => props.fields.name.value },
          ),
          explanation: fields.text({ label: "Explanation", multiline: true }),
          roi: fields.object({
            headers: fields.array(fields.text({ label: "Header" }), { label: "Headers" }),
            rows: fields.array(
              fields.object({
                label: fields.text({ label: "Row Label" }),
                values: fields.array(fields.text({ label: "Value" }), { label: "Values" }),
                highlight: fields.checkbox({ label: "Highlight" }),
              }),
              { label: "ROI Rows", itemLabel: (props) => props.fields.label.value },
            ),
          }),
        }),

        about: fields.object({
          headline: fields.text({ label: "Headline" }),
          paragraphs: fields.array(
            fields.text({ label: "Paragraph", multiline: true }),
            { label: "Paragraphs" },
          ),
          credentials: fields.array(
            fields.object({
              icon: fields.text({ label: "Icon (Lucide name)" }),
              label: fields.text({ label: "Label", validation: { isRequired: true } }),
            }),
            { label: "Credentials", itemLabel: (props) => props.fields.label.value },
          ),
        }),

        finalCta: fields.object({
          headline: fields.text({ label: "Headline" }),
          subheadline: fields.text({ label: "Subheadline", multiline: true }),
          cta: fields.text({ label: "CTA Button" }),
          finePrint: fields.text({ label: "Fine Print" }),
          reassurance: fields.array(
            fields.text({ label: "Point" }),
            { label: "Reassurance Points" },
          ),
        }),

        footer: fields.object({
          tagline: fields.text({ label: "Tagline" }),
          location: fields.text({ label: "Location" }),
          columns: fields.object({
            product: fields.object({
              title: fields.text({ label: "Title" }),
              links: linkArrayField("Product Links"),
            }),
            company: fields.object({
              title: fields.text({ label: "Title" }),
              links: linkArrayField("Company Links"),
            }),
          }),
          cta: fields.text({ label: "Footer CTA" }),
          copyright: fields.text({ label: "Copyright" }),
          legal: linkArrayField("Legal Links"),
        }),
      },
    }),

    // ── What Is Meticulosity.io ─────────────────────────────────────────────
    whatIsMeticulosityIo: singleton({
      label: "What Is Meticulosity.io",
      path: "src/content/data/what-is-meticulosity-io",
      format: { data: "json" },
      schema: {
        wioHero: fields.object({
          eyebrow: fields.text({ label: "Eyebrow" }),
          headline: fields.text({ label: "Headline", multiline: true }),
          subheadline: fields.text({ label: "Subheadline", multiline: true }),
          stats: fields.array(
            statField(),
            { label: "Stats", itemLabel: (props) => props.fields.label.value },
          ),
          cta: fields.text({ label: "CTA" }),
        }),

        threeThings: fields.object({
          intro: fields.text({ label: "Intro", multiline: true }),
          cards: fields.array(
            fields.object({
              number: fields.text({ label: "Number" }),
              title: fields.text({ label: "Title", validation: { isRequired: true } }),
              subtitle: fields.text({ label: "Subtitle" }),
              body: fields.text({ label: "Body", multiline: true }),
            }),
            { label: "Cards", itemLabel: (props) => props.fields.title.value },
          ),
        }),

        wioHowItWorks: fields.object({
          headline: fields.text({ label: "Headline" }),
          intro: fields.text({ label: "Intro", multiline: true }),
          steps: fields.array(
            fields.object({
              number: fields.text({ label: "Number" }),
              title: fields.text({ label: "Title", validation: { isRequired: true } }),
              body: fields.text({ label: "Body", multiline: true }),
              details: fields.text({ label: "Details", multiline: true }),
              extra: fields.text({ label: "Extra", multiline: true }),
              callout: fields.text({ label: "Callout", multiline: true }),
            }),
            { label: "Steps", itemLabel: (props) => props.fields.title.value },
          ),
          bottomCallout: fields.text({ label: "Bottom Callout", multiline: true }),
        }),

        dataLayerDeep: fields.object({
          headline: fields.text({ label: "Headline" }),
          subheadline: fields.text({ label: "Subheadline" }),
          problemIntro: fields.text({ label: "Problem Intro", multiline: true }),
          pullQuote: fields.text({ label: "Pull Quote", multiline: true }),
          problemBody: fields.text({ label: "Problem Body", multiline: true }),
          crisisStory: fields.text({ label: "Crisis Story", multiline: true }),
          crisisConclusion: fields.text({ label: "Crisis Conclusion" }),
          whatItDoes: fields.text({ label: "What It Does", multiline: true }),
          features: fields.array(
            fields.object({
              title: fields.text({ label: "Title", validation: { isRequired: true } }),
              description: fields.text({ label: "Description", multiline: true }),
            }),
            { label: "Features", itemLabel: (props) => props.fields.title.value },
          ),
          howItConnects: fields.text({ label: "How It Connects", multiline: true }),
          howItConnectsIntro: fields.text({ label: "How It Connects Intro" }),
          builtForAi: fields.text({ label: "Built for AI", multiline: true }),
          atScale: fields.text({ label: "At Scale", multiline: true }),
          callout: fields.text({ label: "Callout", multiline: true }),
        }),

        featuredAutomations: fields.object({
          headline: fields.text({ label: "Headline" }),
          intro: fields.text({ label: "Intro", multiline: true }),
          automations: fields.array(
            fields.object({
              name: fields.text({ label: "Name", validation: { isRequired: true } }),
              tags: fields.array(fields.text({ label: "Tag" }), { label: "Tags" }),
              stat: fields.text({ label: "Stat" }),
              body: fields.text({ label: "Body", multiline: true }),
              pain: fields.text({ label: "Pain Point", multiline: true }),
              scale: fields.text({ label: "Scale", multiline: true }),
            }),
            { label: "Automations", itemLabel: (props) => props.fields.name.value },
          ),
          catalogCta: fields.object({
            body: fields.text({ label: "Body", multiline: true }),
            label: fields.text({ label: "Label" }),
          }),
        }),

        aiSection: fields.object({
          headline: fields.text({ label: "Headline" }),
          intro: fields.text({ label: "Intro", multiline: true }),
          introFollowup: fields.text({ label: "Intro Followup" }),
          howDifferent: fields.text({ label: "How Different", multiline: true }),
          howDifferentFollowup: fields.text({ label: "How Different Followup", multiline: true }),
          examples: fields.array(
            fields.object({
              title: fields.text({ label: "Title", validation: { isRequired: true } }),
              description: fields.text({ label: "Description", multiline: true }),
            }),
            { label: "Examples", itemLabel: (props) => props.fields.title.value },
          ),
          callout: fields.text({ label: "Callout", multiline: true }),
        }),

        numbers: fields.object({
          headline: fields.text({ label: "Headline", multiline: true }),
          intro: fields.text({ label: "Intro", multiline: true }),
          timeSavings: fields.object({
            headers: fields.array(fields.text({ label: "Header" }), { label: "Headers" }),
            rows: fields.array(
              fields.object({
                category: fields.text({ label: "Category" }),
                hours: fields.text({ label: "Hours" }),
                drivers: fields.text({ label: "Drivers" }),
              }),
              { label: "Rows", itemLabel: (props) => props.fields.category.value },
            ),
            total: fields.object({
              hours: fields.text({ label: "Hours" }),
              label: fields.text({ label: "Label" }),
            }),
          }),
          roi: fields.object({
            headers: fields.array(fields.text({ label: "Header" }), { label: "Headers" }),
            rows: fields.array(
              fields.object({
                label: fields.text({ label: "Row Label" }),
                values: fields.array(fields.text({ label: "Value" }), { label: "Values" }),
                highlight: fields.checkbox({ label: "Highlight" }),
              }),
              { label: "ROI Rows", itemLabel: (props) => props.fields.label.value },
            ),
          }),
          scaleCallout: fields.text({ label: "Scale Callout", multiline: true }),
        }),

        toolsGrid: fields.object({
          headline: fields.text({ label: "Headline" }),
          intro: fields.text({ label: "Intro", multiline: true }),
          categories: fields.array(
            fields.object({
              name: fields.text({ label: "Category Name", validation: { isRequired: true } }),
              tools: fields.array(fields.text({ label: "Tool" }), { label: "Tools" }),
            }),
            { label: "Tool Categories", itemLabel: (props) => props.fields.name.value },
          ),
        }),

        whatItsNot: fields.object({
          headline: fields.text({ label: "Headline" }),
          intro: fields.text({ label: "Intro", multiline: true }),
          cards: fields.array(
            fields.object({
              title: fields.text({ label: "Title", validation: { isRequired: true } }),
              body: fields.text({ label: "Body", multiline: true }),
            }),
            { label: "Cards", itemLabel: (props) => props.fields.title.value },
          ),
        }),

        wioOriginStory: fields.object({
          headline: fields.text({ label: "Headline" }),
          body: fields.array(
            fields.text({ label: "Paragraph", multiline: true }),
            { label: "Paragraphs" },
          ),
          badges: fields.array(
            fields.text({ label: "Badge" }),
            { label: "Badges" },
          ),
        }),

        faq: faqField(),

        wioFinalCta: fields.object({
          headline: fields.text({ label: "Headline" }),
          subheadline: fields.text({ label: "Subheadline", multiline: true }),
          cta: fields.text({ label: "CTA Button" }),
          finePrint: fields.text({ label: "Fine Print" }),
        }),

        wioNav: fields.object({
          links: linkArrayField("Page Nav Links"),
          cta: fields.text({ label: "Nav CTA" }),
        }),
      },
    }),

    // ── Automation Catalog ──────────────────────────────────────────────────
    automationCatalog: singleton({
      label: "Automation Catalog",
      path: "src/content/data/automation-catalog",
      format: { data: "json" },
      schema: {
        catalogHero: fields.object({
          eyebrow: fields.text({ label: "Eyebrow" }),
          headline: fields.text({ label: "Headline", multiline: true }),
          subheadline: fields.text({ label: "Subheadline", multiline: true }),
          stats: fields.array(
            statField(),
            { label: "Stats", itemLabel: (props) => props.fields.label.value },
          ),
          cta: fields.text({ label: "CTA" }),
          secondaryCta: fields.text({ label: "Secondary CTA" }),
        }),

        catalogOrientation: fields.text({ label: "Orientation Text", multiline: true }),

        categories: fields.array(
          fields.object({
            id: fields.text({ label: "ID" }),
            name: fields.text({ label: "Category Name", validation: { isRequired: true } }),
            intro: fields.text({ label: "Intro", multiline: true }),
            automations: fields.array(
              fields.object({
                id: fields.text({ label: "ID" }),
                name: fields.text({ label: "Name", validation: { isRequired: true } }),
                category: fields.text({ label: "Category" }),
                tags: fields.array(fields.text({ label: "Tag" }), { label: "Tags" }),
                featured: fields.checkbox({ label: "Featured" }),
                stat: fields.text({ label: "Stat" }),
                body: fields.text({ label: "Body", multiline: true }),
                pain: fields.text({ label: "Pain Point", multiline: true }),
                scale: fields.text({ label: "Scale", multiline: true }),
                workflow: fields.array(
                  fields.object({
                    label: fields.text({ label: "Step Label", validation: { isRequired: true } }),
                    type: fields.select({
                      label: "Step Type",
                      options: [
                        { label: "Trigger", value: "trigger" },
                        { label: "AI Processing", value: "ai" },
                        { label: "Slack Notification", value: "slack" },
                        { label: "Human Review", value: "human" },
                        { label: "Action Taken", value: "action" },
                        { label: "Data Operation", value: "data" },
                        { label: "Result", value: "success" },
                      ],
                      defaultValue: "action",
                    }),
                  }),
                  { label: "Workflow Steps", itemLabel: (props) => props.fields.label.value },
                ),
                systems: fields.array(fields.text({ label: "System" }), { label: "Systems" }),
              }),
              { label: "Automations", itemLabel: (props) => props.fields.name.value },
            ),
          }),
          { label: "Categories", itemLabel: (props) => props.fields.name.value },
        ),

        catalogSummary: fields.object({
          headline: fields.text({ label: "Headline" }),
          intro: fields.text({ label: "Intro", multiline: true }),
          table: fields.array(
            fields.object({
              category: fields.text({ label: "Category" }),
              count: fields.number({ label: "Count" }),
              capabilities: fields.text({ label: "Capabilities", multiline: true }),
            }),
            { label: "Summary Table", itemLabel: (props) => props.fields.category.value },
          ),
          total: fields.object({
            count: fields.number({ label: "Total Count" }),
            label: fields.text({ label: "Total Label" }),
          }),
          benchmark: fields.text({ label: "Benchmark", multiline: true }),
        }),

        catalogCta: fields.object({
          headline: fields.text({ label: "Headline" }),
          body: fields.text({ label: "Body", multiline: true }),
          primaryCta: fields.text({ label: "Primary CTA" }),
          secondaryCta: fields.text({ label: "Secondary CTA" }),
          finePrint: fields.text({ label: "Fine Print" }),
        }),

        relatedPages: fields.array(
          fields.object({
            title: fields.text({ label: "Title", validation: { isRequired: true } }),
            description: fields.text({ label: "Description" }),
            href: fields.text({ label: "URL" }),
          }),
          { label: "Related Pages", itemLabel: (props) => props.fields.title.value },
        ),

        catalogNav: fields.object({
          links: linkArrayField("Catalog Nav Links"),
          cta: fields.text({ label: "Nav CTA" }),
        }),

        workflowLegend: fields.array(
          fields.object({
            type: fields.select({
              label: "Type",
              options: [
                { label: "Trigger", value: "trigger" },
                { label: "AI Processing", value: "ai" },
                { label: "Slack Notification", value: "slack" },
                { label: "Human Review", value: "human" },
                { label: "Action Taken", value: "action" },
                { label: "Data Operation", value: "data" },
                { label: "Result", value: "success" },
              ],
              defaultValue: "action",
            }),
            label: fields.text({ label: "Label" }),
          }),
          { label: "Workflow Legend", itemLabel: (props) => props.fields.label.value },
        ),
      },
    }),
  },
});
