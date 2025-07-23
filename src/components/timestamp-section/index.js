import React from 'react';
import SectionHeader from '../section-header';
import IconButtonBar from '../icon-button-bar';
import './style.scss';

function TimeStampSection({ timestamps }) {
  if (!timestamps || timestamps.length < 2) return null;
  
  const getCategoryColor = (category) => {
    const categoryColors = {
      'Quantum Computing': '#8B5CF6', // Purple
      'Informatics': '#3B82F6', // Blue
      'Competition': '#F59E0B', // Amber
      'Education': '#10B981', // Emerald
      'Certification': '#EF4444', // Red
      'Club': '#EC4899', // Pink
      'Leadership': '#6366F1', // Indigo
      'Experience': '#06B6D4', // Cyan
      'Project': '#84CC16', // Lime
      'Publication': '#8B5A2B', // Brown
    };
    return categoryColors[category] || '#6B7280'; // Default gray
  };

  return (
    <div className="timestamp-section">
      <SectionHeader title="Timestamps" />
      <div className="body">
        {timestamps.map((timestamp, index) =>
          index === 0 ? null : (
            <div className="timestamp" key={index}>
              <div className="date">{timestamp.date}</div>
              <div className="activity-container">
                <div className="activity">
                  {timestamp.activity}&nbsp;
                  {timestamp.links && <IconButtonBar links={timestamp.links} />}
                </div>
                {timestamp.category && (
                  <div 
                    className="category-tag" 
                    style={{ backgroundColor: getCategoryColor(timestamp.category) }}
                  >
                    {timestamp.category}
                  </div>
                )}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default TimeStampSection;
