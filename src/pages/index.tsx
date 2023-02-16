import clsx from 'clsx';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  const cardsRef = React.useRef<Array<HTMLDivElement | null>>([]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    cardsRef.current.forEach((cardRef) => {
      if (!cardRef) return;

      const rect = cardRef.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cardRef.style.setProperty('--cursorX', `${x}px`);
      cardRef.style.setProperty('--cursorY', `${y}px`);
    });
  };

  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-[#070a09]'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center text-white'>
            <div
              className='groupborder grid w-full gap-2 sm:grid-cols-2 md:grid-cols-3'
              onMouseMove={onMouseMove}
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className={clsx([
                    'aspect-[7/5] rounded-xl',
                    'bg-slate-700',
                    'groupcontent relative',
                  ])}
                >
                  <div
                    data-id='card-border-gradient'
                    className={clsx([
                      'opacity-0 transition-opacity duration-300 group-[border:hover]:opacity-100',
                      'bg-radial-follow-border [border-radius:inherit]',
                      'absolute inset-0 z-[1]',
                    ])}
                  />
                  <div
                    data-id='card-content-gradient'
                    className={clsx([
                      'opacity-0 transition-opacity duration-300 group-[content:hover]:opacity-100',
                      'bg-radial-follow [border-radius:inherit]',
                      'pointer-events-none absolute inset-px z-[3]',
                    ])}
                  />
                  <div
                    className={clsx([
                      'absolute inset-px z-[2]',
                      'bg-[#131315] [border-radius:inherit]',
                      'grid place-items-center',
                    ])}
                  >
                    <p className='font-medium tracking-tight text-gray-400'>
                      Content {i + 1}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-4 space-x-4'>
              <UnderlineLink href='https://www.youtube.com/watch?v=htGfnF1zN4g&ab_channel=Hyperplexed'>
                Tutorial Credit ↗
              </UnderlineLink>
              <UnderlineLink href='https://linear.app/features'>
                Design Credit ↗
              </UnderlineLink>
              <UnderlineLink href='https://github.com/theodorusclarence/learn-hover-radial-gradient'>
                Source Code ↗
              </UnderlineLink>
            </div>

            <footer className='absolute bottom-2 text-slate-300'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
                Theodorus Clarence
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
