using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DreamBid.Models
{
    [Table("Images")]
    public class Image
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string FileName { get; set; }
        public string FilePath { get; set; }
        public long Length { get; set; }

        public int? CarId { get; set; }
        public Car Car { get; set; }

        public string? UserId { get; set; }
        public User User { get; set; }

        public override string ToString()
        {
            return $"The Image Model Object Details. ( Id: {Id} ), ( FileName: {FileName} ), ( FilePath: {FilePath} ), ( Length: {Length} ), ( CarId: {CarId} ), ( UserId: {UserId} )";
        }
    }
}