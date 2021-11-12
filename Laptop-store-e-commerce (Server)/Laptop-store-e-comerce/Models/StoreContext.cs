using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class StoreContext : DbContext
    {
        public StoreContext()
        {
        }

        public StoreContext(DbContextOptions<StoreContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Bill> Bills { get; set; }
        public virtual DbSet<BillDetail> BillDetails { get; set; }
        public virtual DbSet<Card> Cards { get; set; }
        public virtual DbSet<CardDetail> CardDetails { get; set; }
        public virtual DbSet<Color> Colors { get; set; }
        public virtual DbSet<Image> Images { get; set; }
        public virtual DbSet<KeyboardDetail> KeyboardDetails { get; set; }
        public virtual DbSet<LaptopDescription> LaptopDescriptions { get; set; }
        public virtual DbSet<LaptopDetail> LaptopDetails { get; set; }
        public virtual DbSet<MouseDetail> MouseDetails { get; set; }
        public virtual DbSet<Pcdetail> Pcdetails { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<ScreenDetail> ScreenDetails { get; set; }
        public virtual DbSet<TypeProduct> TypeProducts { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("name=DB");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Bill>(entity =>
            {
                entity.ToTable("Bill");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Iduser).HasColumnName("iduser");

                entity.Property(e => e.Ngaydat)
                    .HasColumnName("ngaydat")
                    .HasColumnType("date");

                entity.Property(e => e.Ngayhuydon)
                    .HasColumnName("ngayhuydon")
                    .HasColumnType("date");

                entity.Property(e => e.Phuongthucthanhtoan)
                    .IsRequired()
                    .HasColumnName("phuongthucthanhtoan")
                    .HasMaxLength(30)
                    .HasDefaultValueSql("(N'Thanh toán khi nhận hàng')");

                entity.Property(e => e.Tinhtrang)
                    .IsRequired()
                    .HasColumnName("tinhtrang")
                    .HasMaxLength(30)
                    .HasDefaultValueSql("(N'Chờ xác nhận')");

                entity.Property(e => e.Tongtien).HasColumnName("tongtien");

                entity.HasOne(d => d.IduserNavigation)
                    .WithMany(p => p.Bills)
                    .HasForeignKey(d => d.Iduser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Bill__iduser__5629CD9C");
            });

            modelBuilder.Entity<BillDetail>(entity =>
            {
                entity.HasKey(e => new { e.IdBill, e.IdProduct })
                    .HasName("PK__BillDeta__E317F405CB027AEA");

                entity.ToTable("BillDetail");

                entity.Property(e => e.IdBill)
                    .HasColumnName("idBill")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.IdProduct)
                    .HasColumnName("idProduct")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Soluong).HasColumnName("soluong");

                entity.Property(e => e.Tongtien).HasColumnName("tongtien");

                entity.HasOne(d => d.IdBillNavigation)
                    .WithMany(p => p.BillDetails)
                    .HasForeignKey(d => d.IdBill)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BillDetai__idBil__571DF1D5");

                entity.HasOne(d => d.IdProductNavigation)
                    .WithMany(p => p.BillDetails)
                    .HasForeignKey(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BillDetai__idPro__5812160E");
            });

            modelBuilder.Entity<Card>(entity =>
            {
                entity.ToTable("Card");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Iduser).HasColumnName("iduser");

                entity.Property(e => e.Tongtien).HasColumnName("tongtien");

                entity.HasOne(d => d.IduserNavigation)
                    .WithMany(p => p.Cards)
                    .HasForeignKey(d => d.Iduser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Card__iduser__59063A47");
            });

            modelBuilder.Entity<CardDetail>(entity =>
            {
                entity.HasKey(e => new { e.IdCard, e.IdProduct })
                    .HasName("PK__CardDeta__8E4D2F6AED3535CE");

                entity.ToTable("CardDetail");

                entity.Property(e => e.IdCard)
                    .HasColumnName("idCard")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.IdProduct)
                    .HasColumnName("idProduct")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Soluong).HasColumnName("soluong");

                entity.Property(e => e.Tongtien).HasColumnName("tongtien");

                entity.HasOne(d => d.IdCardNavigation)
                    .WithMany(p => p.CardDetails)
                    .HasForeignKey(d => d.IdCard)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CardDetai__idCar__59FA5E80");

                entity.HasOne(d => d.IdProductNavigation)
                    .WithMany(p => p.CardDetails)
                    .HasForeignKey(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CardDetai__idPro__5AEE82B9");
            });

            modelBuilder.Entity<Color>(entity =>
            {
                entity.ToTable("Color");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Image>(entity =>
            {
                entity.ToTable("Image");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.NameImage)
                    .IsRequired()
                    .HasColumnName("nameImage")
                    .HasMaxLength(100);

                entity.Property(e => e.Path)
                    .HasColumnName("path")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Position)
                    .HasColumnName("position")
                    .HasMaxLength(20);

                entity.Property(e => e.TypeImage)
                    .HasColumnName("typeImage")
                    .HasMaxLength(20);
            });

            modelBuilder.Entity<KeyboardDetail>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__Keyboard__5EEC79D12ED02147");

                entity.ToTable("KeyboardDetail");

                entity.Property(e => e.IdProduct)
                    .HasColumnName("idProduct")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Brandswitch)
                    .HasColumnName("brandswitch")
                    .HasMaxLength(50);

                entity.Property(e => e.Den)
                    .HasColumnName("den")
                    .HasMaxLength(50);

                entity.Property(e => e.Ketnoi)
                    .HasColumnName("ketnoi")
                    .HasMaxLength(50);

                entity.Property(e => e.Layout).HasColumnName("layout");

                entity.Property(e => e.Loai)
                    .HasColumnName("loai")
                    .HasMaxLength(50);

                entity.Property(e => e.Motaden)
                    .HasColumnName("motaden")
                    .HasMaxLength(100);

                entity.Property(e => e.Motaswitch)
                    .HasColumnName("motaswitch")
                    .HasMaxLength(100);

                entity.Property(e => e.Size)
                    .HasColumnName("size")
                    .HasMaxLength(50);

                entity.Property(e => e.Typeswitch)
                    .HasColumnName("typeswitch")
                    .HasMaxLength(20);

                entity.HasOne(d => d.IdProductNavigation)
                    .WithOne(p => p.KeyboardDetail)
                    .HasForeignKey<KeyboardDetail>(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__KeyboardD__idPro__5BE2A6F2");
            });

            modelBuilder.Entity<LaptopDescription>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__LaptopDe__5EEC79D1EC4B2455");

                entity.ToTable("LaptopDescription");

                entity.Property(e => e.IdProduct)
                    .HasColumnName("idProduct")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Congketnoi)
                    .HasColumnName("congketnoi")
                    .HasMaxLength(100);

                entity.Property(e => e.Congxuathinh)
                    .HasColumnName("congxuathinh")
                    .HasMaxLength(100);

                entity.Property(e => e.Detailcpu)
                    .HasColumnName("detailcpu")
                    .HasMaxLength(100);

                entity.Property(e => e.Detailmanhinh)
                    .HasColumnName("detailmanhinh")
                    .HasMaxLength(100);

                entity.Property(e => e.Detailram)
                    .HasColumnName("detailram")
                    .HasMaxLength(100);

                entity.Property(e => e.Detailvga)
                    .HasColumnName("detailvga")
                    .HasMaxLength(100);

                entity.Property(e => e.Hdh)
                    .HasColumnName("hdh")
                    .HasMaxLength(100);

                entity.Property(e => e.Ketnoikhongday)
                    .HasColumnName("ketnoikhongday")
                    .HasMaxLength(100);

                entity.Property(e => e.Khoiluong)
                    .HasColumnName("khoiluong")
                    .HasMaxLength(100);

                entity.Property(e => e.Kieukhe)
                    .HasColumnName("kieukhe")
                    .HasMaxLength(100);

                entity.Property(e => e.Ocung)
                    .HasColumnName("ocung")
                    .HasMaxLength(100);

                entity.Property(e => e.Pin)
                    .HasColumnName("pin")
                    .HasMaxLength(100);

                entity.Property(e => e.Size)
                    .HasColumnName("size")
                    .HasMaxLength(100);

                entity.HasOne(d => d.IdProductNavigation)
                    .WithOne(p => p.LaptopDescription)
                    .HasForeignKey<LaptopDescription>(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__LaptopDes__idPro__5CD6CB2B");
            });

            modelBuilder.Entity<LaptopDetail>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__LaptopDe__5EEC79D1FCB97D74");

                entity.ToTable("LaptopDetail");

                entity.Property(e => e.IdProduct)
                    .HasColumnName("idProduct")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Cpu)
                    .HasColumnName("cpu")
                    .HasMaxLength(20);

                entity.Property(e => e.Manhinh)
                    .HasColumnName("manhinh")
                    .HasMaxLength(10);

                entity.Property(e => e.Ram)
                    .HasColumnName("ram")
                    .HasMaxLength(20);

                entity.Property(e => e.Vga)
                    .HasColumnName("vga")
                    .HasMaxLength(20);

                entity.HasOne(d => d.IdProductNavigation)
                    .WithOne(p => p.LaptopDetail)
                    .HasForeignKey<LaptopDetail>(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__LaptopDet__idPro__5DCAEF64");
            });

            modelBuilder.Entity<MouseDetail>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__MouseDet__5EEC79D112150FD3");

                entity.ToTable("MouseDetail");

                entity.Property(e => e.IdProduct)
                    .HasColumnName("idProduct")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Dangcambien)
                    .HasColumnName("dangcambien")
                    .HasMaxLength(50);

                entity.Property(e => e.Dophangiai)
                    .HasColumnName("dophangiai")
                    .HasMaxLength(50);

                entity.Property(e => e.Ketnoi)
                    .HasColumnName("ketnoi")
                    .HasMaxLength(50);

                entity.Property(e => e.Khoiluong)
                    .HasColumnName("khoiluong")
                    .HasMaxLength(40);

                entity.Property(e => e.Kichthuoc)
                    .HasColumnName("kichthuoc")
                    .HasMaxLength(50);

                entity.Property(e => e.Kieuketnoi)
                    .HasColumnName("kieuketnoi")
                    .HasMaxLength(50);

                entity.Property(e => e.Led)
                    .HasColumnName("led")
                    .HasMaxLength(50);

                entity.Property(e => e.Loaichuot)
                    .HasColumnName("loaichuot")
                    .HasMaxLength(50);

                entity.Property(e => e.Sonutbam).HasColumnName("sonutbam");

                entity.Property(e => e.Tencambien)
                    .HasColumnName("tencambien")
                    .HasMaxLength(50);

                entity.Property(e => e.Thoigianphanhoi)
                    .HasColumnName("thoigianphanhoi")
                    .HasMaxLength(50);

                entity.HasOne(d => d.IdProductNavigation)
                    .WithOne(p => p.MouseDetail)
                    .HasForeignKey<MouseDetail>(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__MouseDeta__idPro__5EBF139D");
            });

            modelBuilder.Entity<Pcdetail>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__PCDetail__5EEC79D1B9772301");

                entity.ToTable("PCDetail");

                entity.Property(e => e.IdProduct)
                    .HasColumnName("idProduct")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Casepc)
                    .HasColumnName("casepc")
                    .HasMaxLength(100);

                entity.Property(e => e.Cpu)
                    .HasColumnName("cpu")
                    .HasMaxLength(50);

                entity.Property(e => e.Cputype)
                    .HasColumnName("cputype")
                    .HasMaxLength(50);

                entity.Property(e => e.Detailcpu)
                    .HasColumnName("detailcpu")
                    .HasMaxLength(100);

                entity.Property(e => e.Detailram)
                    .HasColumnName("detailram")
                    .HasMaxLength(100);

                entity.Property(e => e.Mainboard)
                    .HasColumnName("mainboard")
                    .HasMaxLength(50);

                entity.Property(e => e.Psu)
                    .HasColumnName("psu")
                    .HasMaxLength(50);

                entity.Property(e => e.Ram)
                    .HasColumnName("ram")
                    .HasMaxLength(30);

                entity.Property(e => e.Typepc)
                    .HasColumnName("typepc")
                    .HasMaxLength(50);

                entity.Property(e => e.Vganame)
                    .HasColumnName("vganame")
                    .HasMaxLength(50);

                entity.Property(e => e.Vgatype)
                    .HasColumnName("vgatype")
                    .HasMaxLength(30);

                entity.HasOne(d => d.IdProductNavigation)
                    .WithOne(p => p.Pcdetail)
                    .HasForeignKey<Pcdetail>(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PCDetail__idProd__5FB337D6");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Product");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Baohanh).HasColumnName("baohanh");

                entity.Property(e => e.Gia).HasColumnName("gia");

                entity.Property(e => e.Hienthi)
                    .HasColumnName("hienthi")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Idloai)
                    .HasColumnName("idloai")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Mau)
                    .HasColumnName("mau")
                    .HasMaxLength(20);

                entity.Property(e => e.Nameimage)
                    .HasColumnName("nameimage")
                    .HasMaxLength(100);

                entity.Property(e => e.Namsx).HasColumnName("namsx");

                entity.Property(e => e.Ten)
                    .IsRequired()
                    .HasColumnName("ten")
                    .HasMaxLength(100);

                entity.Property(e => e.Thuonghieu)
                    .HasColumnName("thuonghieu")
                    .HasMaxLength(20);

                entity.HasOne(d => d.IdloaiNavigation)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.Idloai)
                    .HasConstraintName("FK__Product__idloai__60A75C0F");
            });

            modelBuilder.Entity<ScreenDetail>(entity =>
            {
                entity.HasKey(e => e.IdProduct)
                    .HasName("PK__ScreenDe__5EEC79D1CA94F092");

                entity.ToTable("ScreenDetail");

                entity.Property(e => e.IdProduct)
                    .HasColumnName("idProduct")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Bemat)
                    .HasColumnName("bemat")
                    .HasMaxLength(50);

                entity.Property(e => e.Congxuat)
                    .HasColumnName("congxuat")
                    .HasMaxLength(40);

                entity.Property(e => e.Dophangiai)
                    .HasColumnName("dophangiai")
                    .HasMaxLength(30);

                entity.Property(e => e.Dophangiaipixel)
                    .HasColumnName("dophangiaipixel")
                    .HasMaxLength(30);

                entity.Property(e => e.Dosang)
                    .HasColumnName("dosang")
                    .HasMaxLength(30);

                entity.Property(e => e.Gocnhin)
                    .HasColumnName("gocnhin")
                    .HasMaxLength(30);

                entity.Property(e => e.Hdr)
                    .HasColumnName("hdr")
                    .HasMaxLength(40);

                entity.Property(e => e.Khoiluong)
                    .HasColumnName("khoiluong")
                    .HasMaxLength(10);

                entity.Property(e => e.Kichthuoc).HasColumnName("kichthuoc");

                entity.Property(e => e.Kieumanhinh)
                    .HasColumnName("kieumanhinh")
                    .HasMaxLength(50);

                entity.Property(e => e.Mauhienthi)
                    .HasColumnName("mauhienthi")
                    .HasMaxLength(30);

                entity.Property(e => e.Tamnen)
                    .HasColumnName("tamnen")
                    .HasMaxLength(30);

                entity.Property(e => e.Tanso).HasColumnName("tanso");

                entity.Property(e => e.Thoigianphanhoi)
                    .HasColumnName("thoigianphanhoi")
                    .HasMaxLength(20);

                entity.Property(e => e.Tile)
                    .HasColumnName("tile")
                    .HasMaxLength(10);

                entity.HasOne(d => d.IdProductNavigation)
                    .WithOne(p => p.ScreenDetail)
                    .HasForeignKey<ScreenDetail>(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__ScreenDet__idPro__619B8048");
            });

            modelBuilder.Entity<TypeProduct>(entity =>
            {
                entity.ToTable("TypeProduct");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Ten)
                    .IsRequired()
                    .HasColumnName("ten")
                    .HasMaxLength(40);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Diachi)
                    .HasColumnName("diachi")
                    .HasMaxLength(100);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(50);

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasColumnName("firstname")
                    .HasMaxLength(100);

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasColumnName("lastname")
                    .HasMaxLength(100);

                entity.Property(e => e.Mode)
                    .IsRequired()
                    .HasColumnName("mode")
                    .HasMaxLength(20)
                    .HasDefaultValueSql("('CUSTOMER')");

                entity.Property(e => e.Nameimage)
                    .HasColumnName("nameimage")
                    .HasMaxLength(200);

                entity.Property(e => e.Pass)
                    .IsRequired()
                    .HasColumnName("pass")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Sdt)
                    .HasColumnName("sdt")
                    .HasMaxLength(11);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
