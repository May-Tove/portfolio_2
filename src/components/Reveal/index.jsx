import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useInView, useAnimation } from 'framer-motion';

export const Reveal = ({ children }) => {
  const mainControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);
  return (
    <div
      ref={ref}
      style={{ position: 'relative', width: '100%', overflow: 'hidden' }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
};
