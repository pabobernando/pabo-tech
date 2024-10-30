import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="WorkStation">
          <Tool title="Huawei MateBook D 14 (2021 - Present)">
            Core i5 10TH GEN, 8GB RAM & Linux Mint
          </Tool>
          <Tool title="MacBook Pro M2 (2023)">
            512GB ,13 inc, 8GB RAM & macOS Sonoma 14.1
          </Tool>
          <Tool title="Monitor MSI">OPTIX G241V</Tool>
          <Tool title="Keyboard Vortex Series">87 Keys MECA VX7</Tool>
          <Tool title="Mouse Logitech">G102</Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Visual Studio Code is still the best text editor
            ever made.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">Web Design & Mobile Design</Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
