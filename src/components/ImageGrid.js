import React from 'react';
import { motion } from 'framer-motion';
import { useFirestore } from 'hooks';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    return (
        <div className="img-grid">
            {docs &&
                docs.map(doc => (
                    <motion.div
                        className="img-wrap"
                        key={doc.id}
                        onClick={() => setSelectedImg(doc.url)}
                        layout
                        whileHover={{ opacity: 1 }}
                    >
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            src={doc.url}
                            alt="uploaded"
                        />
                    </motion.div>
                ))}
        </div>
    );
};

export default ImageGrid;
