import { InfiniteSlider } from './InfiniteSlider'

import bcgLogo from '../assets/logos/bcg.svg'
import awsLogo from '../assets/logos/aws.png'
import linkedinLogo from '../assets/logos/linkedin.png'
import wheelsLogo from '../assets/logos/wheels.png'
import salesforceLogo from '../assets/logos/salesforce.png'
import microsoftLogo from '../assets/logos/microsoft.png'
import googleLogo from '../assets/logos/google.png'
import wizLogo from '../assets/logos/wiz.png'
import kraftheinzLogo from '../assets/logos/kraftheinz.png'

const logos = [
  { id: 'microsoft',  label: 'Microsoft',   src: microsoftLogo   },
  { id: 'google',     label: 'Google',      src: googleLogo      },
  { id: 'linkedin',   label: 'LinkedIn',    src: linkedinLogo    },
  { id: 'salesforce', label: 'Salesforce',  src: salesforceLogo  },
  { id: 'aws',        label: 'AWS',         src: awsLogo         },
  { id: 'bcg',        label: 'BCG',         src: bcgLogo         },
  { id: 'wheels',     label: 'Wheels',      src: wheelsLogo      },
  { id: 'wiz',        label: 'Wiz',         src: wizLogo         },
  { id: 'kraftheinz', label: 'Kraft Heinz', src: kraftheinzLogo  },
]

export function LogosSlider() {
  return (
    <div className="logos-slider-wrapper">
      <p className="logos-slider-label">Trusted by teams at</p>
      <div className="logos-slider-track">
        <InfiniteSlider gap={64} duration={35} style={{ height: '100%' }}>
          {logos.map((logo) => (
            <div key={logo.id} className="logos-slider-item">
              <img
                src={logo.src}
                alt={logo.label}
                className="logos-slider-img"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  )
}
