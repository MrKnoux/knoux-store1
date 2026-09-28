'use client';

import { KnouxField } from '@/components/motion/KnouxField';
import { ArrivalFigure } from '@/components/auth/ArrivalFigure';
import { formationIsAligned, type ArrivalPhase } from '@/components/auth/choreography';

/**
 * The Arrival Chamber environment.
 *
 * The particle universe is the shared `KnouxField`, so the stars and the mark
 * that resolve here are drawn by the same code and the same canonical geometry
 * as the homepage hero. This module contributes the room around them: the void,
 * the architectural planes, the floor line the figure travels along, and the
 * signal that answers its arrival.
 *
 * Everything here is decorative and hidden from assistive technology. The form
 * is the content.
 */
export function AuthScene({ phase }: { phase: ArrivalPhase }) {
  const aligned = formationIsAligned(phase);
  const arrived = phase !== 'field' && phase !== 'travelling';

  return (
    <div className="chamber" aria-hidden="true">
      <div className="chamber__void" />

      {/* The shared field: ambient stars, the canonical mark resolving out of
          them, and the pointer response. One canvas, one loop. */}
      <KnouxField className="chamber__plane" markHeight={244} resolved={aligned ? 1 : 0} parallax />

      {/* Fine grain, so the flat black never bands across a wide gradient. */}
      <div className="chamber__grain" />

      <div className="chamber__architecture">
        <span className="chamber__horizon" />
        <span className="chamber__seam" />
        <span className="chamber__return" />
      </div>

      {/* The floor line the figure travels along, and the single violet signal
          that answers its arrival. */}
      <div className={`chamber__floor ${aligned ? 'is-signalled' : ''}`}>
        <span className="chamber__floor-line" />
        <span className="chamber__floor-pulse" />
      </div>

      <div className="chamber__figure-dock">
        <ArrivalFigure arrived={arrived} />
        <span className="chamber__node-signal" />
      </div>
    </div>
  );
}
